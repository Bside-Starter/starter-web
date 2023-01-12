import React from "react";
import { useRouter } from "next/router";
import { useInterface } from "~/utils/interface";
import styled from "styled-components";
import Button from "~/components/Button";
import { ParsedStorage } from "~/utils/storage";
import routes from "~/constants/routes";
import TextField from "~/components/TextField";

const SignUp = () => {
  const router = useRouter();
  const { pushNavigation, replaceNavigation } = useInterface();
  const id = parseInt(router.query.id as string, 10);

  const inputRef = React.useRef<any>([]);

  const setAccordion = (value: number) => {
    const isVisible = inputRef.current[value].classList.contains("active");
    isVisible
      ? inputRef.current[value].classList.remove("active")
      : inputRef.current[value].classList.add("active");
  };

  const signupList = [
    {
      id: 1,
      header: <SignUpHeader>회원가입하기</SignUpHeader>,
      content: (
        <FieldContainer>
          <TextField label={"이메일"} placeholder={"예) user@sample.com"} />
          <>
            <TextField label={"비밀번호"} placeholder={"비밀번호"} />
            <TextField placeholder={"비밀번호 확인"} />
          </>
          <TextField
            label={"휴대폰번호"}
            placeholder={"휴대폰 번호를 입력해주세요."}
          />
          <TextField label={"닉네임"} placeholder={"닉네임을 입력해주세요"} />
        </FieldContainer>
      ),
      buttonTitle: "다음으로 넘어갈래요.",
    },
    {
      id: 2,
      header: <SignUpHeader>약관동의</SignUpHeader>,
      content: (
        <div>
          <Agree>
            <div className={"top"}>
              <div className={"title"}>서비스 이용약관 동의</div>
              <div className={"btn"} onClick={() => setAccordion(0)}>
                내용보기
              </div>
            </div>
            <div className={"content"} ref={(el) => (inputRef.current[0] = el)}>
              Lorem ipsum dolor sit amet consectetur. Turpis in eu aliquam mi.
              Velit diam sed id imperdiet mauris amet non turpis. Id euismod
              adipiscing et cras. Sapien ege tellus nibh adipiscing et cras.
              Sapien egestas
            </div>
          </Agree>
          <Agree>
            <div className={"top"}>
              <div className={"title"}>개인정보 수집 및 이용 동의</div>
              <div className={"btn"} onClick={() => setAccordion(1)}>
                내용보기
              </div>
            </div>
            <div className={"content"} ref={(el) => (inputRef.current[1] = el)}>
              Lorem ipsum dolor sit amet consectetur. Turpis in eu aliquam mi.
              Velit diam sed id imperdiet mauris amet non turpis. Id euismod
              adipiscing et cras. Sapien ege tellus nibh adipiscing et cras.
              Sapien egestas
            </div>
          </Agree>
        </div>
      ),
      buttonTitle: "동의할게요.",
    },
  ];

  const isLast = id === signupList.length;
  const matchedItem = signupList.find((v) => v.id === id);

  const handleNext = () => {
    if (isLast) {
      ParsedStorage.setItem("isSignupViewed", true);
      replaceNavigation(routes.SIGN_IN);
    } else {
      pushNavigation(`${routes.SIGN_UP}/${id + 1}`);
    }
  };

  return (
    <Container>
      {matchedItem?.header}
      {matchedItem?.content}
      <ButtonWrap>
        <Button
          title={matchedItem?.buttonTitle}
          hasNextButton
          onClick={handleNext}
        />
      </ButtonWrap>
    </Container>
  );
};

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const SignUpHeader = styled.div`
  position: absolute;
  width: 375px;
  height: 56px;
  top: 50px;

  font-family: "Pretendard", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Agree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 16px;

  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .title {
    font-family: "Pretendard", serif;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    align-items: center;
    letter-spacing: -0.04em;

    color: #ffffff;
  }

  .btn {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    text-decoration-line: underline;
    color: #7f848b;
  }

  .content {
    border-radius: 5px;

    background: #e4eaf2;

    font-family: "Pretendard", serif;
    font-size: 12px;
    line-height: 18px;

    display: flex;
    align-items: center;
    letter-spacing: -0.01em;

    color: #585c62;

    width: 100%;

    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }

  .active {
    display: block;
    height: 193.7px;
    overflow-y: auto;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14rem 2rem 4.2rem;
  height: 100vh;
  margin-bottom: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
  margin-top: 40px;
`;

export default SignUp;
