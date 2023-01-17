import { useRouter } from "next/router";
import { useCommonState } from "~/context/common";
import { RoutePayload, WebViewMessageType } from "~/constants/types";
import { sendMessage } from "./message";

export function useInterface() {
  const router = useRouter();
  const { deviceInfo } = useCommonState();
  const webLoaded = () => {
    sendMessage({
      type: WebViewMessageType.WEB_LOADED,
      payload: null,
    });
  };

  const initializeComplete = () => {
    sendMessage({
      type: WebViewMessageType.INITIALIZED,
      payload: null,
    });
  };

  const pushNavigation = (url: string) => {
    if (deviceInfo?.platform === "ios" || deviceInfo?.platform === "android") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.PUSH_NAVIGATION,
        payload: { url },
      });
    } else {
      router.push(url);
    }
  };

  const replaceNavigation = (url: string) => {
    if (deviceInfo?.platform === "ios" || deviceInfo?.platform === "android") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.REPLACE_NAVIGATION,
        payload: { url },
      });
    } else {
      router.replace(url);
    }
  };

  const popNavigation = () => {
    if (deviceInfo?.platform === "ios" || deviceInfo?.platform === "android") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.POP_NAVIGATION,
        payload: { url: "" },
      });
    } else {
      router.back();
    }
  };

  const clearNavigation = ({
    nextUrl,
    isPush = false,
  }: {
    nextUrl: string;
    isPush?: boolean;
  }) => {
    if (deviceInfo?.platform === "ios" || deviceInfo?.platform === "android") {
      sendMessage<RoutePayload>({
        type: WebViewMessageType.CLEAR_NAVIGATION,
        payload: {
          url: nextUrl,
        },
      });
    } else {
      if (isPush) router.push(nextUrl);
      else router.replace(nextUrl);
    }
  };
  return {
    webLoaded,
    initializeComplete,
    pushNavigation,
    replaceNavigation,
    popNavigation,
    clearNavigation,
  };
}
