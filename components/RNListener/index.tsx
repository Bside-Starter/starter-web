import { useRouter } from "next/router";
import { Fragment, PropsWithChildren, useEffect, useState } from "react";
import { requestSocialSignIn } from "~/apis/auth";
import { useAuthActions, useAuthState } from "~/context/auth";
import routes from "~/constants/routes";
import {
  DeviceInfoPayload,
  SocialSignInResultPayload,
  WebViewMessageType,
} from "~/constants/types";
import { parseWebMessage } from "~/utils/message";
import { useMutation } from "react-query";
import { ParsedStorage } from "~/utils/storage";
import { useCommonActions } from "~/context/common";
import { useInterface } from "~/utils/interface";

const RNListener = ({ children }: PropsWithChildren) => {
  const { user } = useAuthState();
  const { setUser } = useAuthActions();
  const { setDeviceInfo } = useCommonActions();
  const { webLoaded, initializeComplete, replaceNavigation } = useInterface();
  const [isSessionChecked, setIsSessionChecked] = useState(false);
  const [tutorialCheck, setTutorialCheck] = useState({
    isCheck: false,
    isViewed: false,
  });
  const [isInitializeCheck, setIsInitializeCheck] = useState(false);
  const router = useRouter();

  const socialSignInMutation = useMutation(requestSocialSignIn, {
    onError: (e) => {
      // 404일때 회원가입 페이지로
    },
  });

  useEffect(() => {
    const listener = (event: any) => {
      const webData = event.data;
      const { type } = JSON.parse(webData);
      switch (type) {
        case WebViewMessageType.DEVICE_INFO:
          const { payload: deviceInfo } =
            parseWebMessage<DeviceInfoPayload>(webData);
          setDeviceInfo(deviceInfo);
          break;
        case WebViewMessageType.SOCIAL_SIGN_IN_RESULT:
          const { payload: socialSignInResultPayload } =
            parseWebMessage<SocialSignInResultPayload>(webData);
          socialSignInMutation.mutate(socialSignInResultPayload, {
            onSuccess: (res) => {
              if (!res) return;
              ParsedStorage.setItem("authToken", { token: res.token });
              setUser(res.user);
              replaceNavigation(routes.HOME);
            },
          });
          break;
        case WebViewMessageType.GO_BACK:
          router.back();
          break;
        default:
          break;
      }
    };
    //@ts-ignore
    if (window.ReactNativeWebView) {
      document.addEventListener("message", listener);
      // ios
      window.addEventListener("message", listener);
    }
    return () => {
      document.removeEventListener("message", listener);
      // ios
      window.removeEventListener("message", listener);
    };
  }, [router]);

  // 튜토리얼 체크
  useEffect(() => {
    if (router.pathname !== "/") return;
    console.log(router);
    if (!tutorialCheck.isCheck && isSessionChecked) {
      const isTutorialViewed = ParsedStorage.getItem("isTutorialViewed");
      setTutorialCheck({ isCheck: true, isViewed: !!isTutorialViewed });
    }
  }, [router, tutorialCheck, isSessionChecked]);

  // 세션 체크
  useEffect(() => {
    if (router.pathname !== "/") return;
    if (!isSessionChecked) {
      const authToken = ParsedStorage.getItem("authToken");
      if (authToken?.token) {
        // 세션 체크 요청 후
        setUser({
          name: "이름",
          age: 29,
          address: "서울",
        });
      } else {
        // setUser({
        //   name: "이름",
        //   age: 29,
        //   address: "서울",
        // });
      }
      setIsSessionChecked(true);
    }
  }, [isSessionChecked, setUser, router]);

  // 초기 라우팅
  useEffect(() => {
    if (router.pathname !== "/") return;
    if (!isInitializeCheck) {
      if (tutorialCheck.isCheck && isSessionChecked) {
        if (user) {
          router.replace(routes.HOME);
        } else {
          if (tutorialCheck.isViewed) {
            router.replace(routes.SIGN_IN);
          } else {
            router.replace(`${routes.TUTORIAL}/1`);
          }
        }
        setIsInitializeCheck(true);
      }
    }
  }, [user, tutorialCheck, isInitializeCheck, isSessionChecked, router]);

  // 이니셜라이즈 완료시
  useEffect(() => {
    if (isInitializeCheck) {
      initializeComplete();
    }
  }, [isInitializeCheck]);

  useEffect(() => {
    webLoaded();
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default RNListener;
