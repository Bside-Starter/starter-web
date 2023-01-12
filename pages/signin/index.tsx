import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import {
  SocialProvider,
  SocialSignInPayload,
  WebViewMessageType,
} from "~/constants/types";
import { useAuthActions } from "~/context/auth";
import useHistoryManager from "~/hooks/useHistoryManager";
import { sendMessage } from "~/utils/message";
import Button from "../../components/Button";
import routes from "../../constants/routes";
import TextField from "~/components/TextField";
import { useInterface } from "~/utils/interface";

const SignIn = () => {
  const router = useRouter();
  const history = useHistoryManager();
  const { setToken } = useAuthActions();

  const { pushNavigation, replaceNavigation } = useInterface();

  const handleSocialSignIn = (provider: SocialProvider) => () => {
    // @ts-ignore
    if (window?.ReactNativeWebView) {
      // 앱 소셜 로그인
      sendMessage<SocialSignInPayload>({
        type: WebViewMessageType.SOCIAL_SIGN_IN,
        payload: {
          provider,
        },
      });
    } else {
      // 웹 소셜 로그인
      setToken("temp token");
      router.push(routes.HOME);
    }
  };

  useEffect(() => {
    history.disableGoBack();
  }, [history]);

  return (
    <Container>
      <Header>로그인 하기</Header>
      <Content>
        <div className={"input"}>
          <TextField placeholder={"아이디 입력"} />
          <TextField placeholder={"비밀번호 입력"} />
        </div>
        <div className={"social"}>
          <Button>카카오로 계속하기</Button>
          <Button>애플로 계속하기</Button>
        </div>
      </Content>
      <Footer onClick={() => replaceNavigation(`${routes.SIGN_UP}/${1}`)}>
        이메일 회원가입하기
      </Footer>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14rem 2rem 4.2rem;
  height: 100%;
`;

const Header = styled.div`
  width: 375px;
  height: 56px;
  left: -0.5px;
  top: 60px;

  font-family: "Pretendard", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #ffffff;

  margin-bottom: 36px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .input {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .social {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      background-color: yellow;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  //position: absolute;
  width: 335px;
  height: 44px;
  left: 19.66px;
  top: 710px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: -0.01em;
  text-decoration-line: underline;

  color: rgba(255, 255, 255, 0.7);

  opacity: 0.7;

  margin-top: 56px;
`;

export default SignIn;
