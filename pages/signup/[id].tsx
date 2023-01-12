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
  justify-content: space-between;

  font-family: "Pretendard", serif;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  align-items: center;
  letter-spacing: -0.04em;

  color: #ffffff;

  .content {
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
`;

const ServiceAgree = styled.div`
  width: 334.15px;
  height: 193.7px;

  border-radius: 5px;

  background: #e4eaf2;
  overflow-y: auto;

  font-family: "Pretendard", serif;
  font-size: 12px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;

  color: #585c62;
`;

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
          서비스 이용약관 동의
          <div className={"content"}>내용보기</div>
        </Agree>
        <ServiceAgree>
          Lorem ipsum dolor sit amet consectetur. Turpis in eu aliquam mi. Velit
          diam sed id imperdiet mauris amet non turpis. Id euismod adipiscing et
          cras. Sapien ege tellus nibh adipiscing et cras. Sapien egestas
        </ServiceAgree>
        <Agree>
          개인정보 수집 및 이용 동의
          <div className={"content"}>내용보기</div>
        </Agree>
        <ServiceAgree>
          Lorem ipsum dolor sit amet consectetur. Turpis in eu aliquam mi. Velit
          diam sed id imperdiet mauris amet non turpis. Id euismod adipiscing et
          cras. Sapien ege tellus nibh adipiscing et cras. Sapien egestas
        </ServiceAgree>
      </div>
    ),
    buttonTitle: "동의할게요.",
  },
];

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
