import { ReactElement } from "react";
import MainTabLayout from "~/components/MainTabLayout";
import { NextPageWithLayout } from "../_app";
import { useMypageQuery } from "~/hooks/mypage/useMypage";
import Button from "~/components/Button";
import { useAuthActions } from "~/context/auth";
import { ParsedStorage } from "~/utils/storage";
import styled from "styled-components";
import routes from "~/constants/routes";
import { useInterface } from "~/utils/interface";

const MyPage: NextPageWithLayout = () => {
  const data = useMypageQuery();
  const { clearUser } = useAuthActions();
  const { clearNavigation } = useInterface();

  // @ts-ignore
  const { name, age, address } = data;

  const handleSignOut = () => {
    clearUser();
    ParsedStorage.removeItem("authToken");
    clearNavigation({ nextUrl: routes.SIGN_IN });
  };

  return (
    <Container>
      <Header>마이페이지</Header>
      <div
        style={{
          width: 80,
          height: 80,
          marginTop: -50,
          marginBottom: 50,
          backgroundColor: "gray",
          borderRadius: "50%",
          alignSelf: "center",
        }}
      />
      <TextFieldContainer>
        <TextField>
          <label>이름</label>
          <input />
        </TextField>
        <TextField>
          <label>닉네임</label>
          <input />
        </TextField>
        <TextField>
          <label>휴대폰번호</label>
          <input />
        </TextField>
        <TextField>
          <label>이메일</label>
          <input />
        </TextField>
      </TextFieldContainer>
      <div style={{ marginTop: "60px", marginBottom: 40 }}>
        <Button>프로필 편집</Button>
      </div>
      <div style={{ height: 72 }}>
        <Label>테마 설정</Label>
      </div>
      <div style={{ height: 89 }}>
        <Label>알림 받기</Label>
        <div>
          <ThemeContent>
            참여중인 스페이스 활동 알림, 공지, 추천 등의
            <br />
            알림을 받을 수 있어요.
          </ThemeContent>
          <br />
          <ThemeContent>
            알림을 끄려면 기기의 ‘설정 &gt; 알림 &gt; 소근소근’에서
            해제해주세요.
          </ThemeContent>
        </div>
      </div>
      <LogoutContainer>
        <Label onClick={handleSignOut}>로그아웃</Label>
      </LogoutContainer>
    </Container>
  );
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  position: absolute;
  //width: 375px;
  height: 56px;
  top: 50px;

  ${({ theme }) => theme.typo.B3_R}
`;

const TextField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  label {
    ${({ theme }) => theme.typo.B3_R}
    width: 34px;
    height: 24px;
  }

  input {
    background-color: transparent;
    color: white;
    ${({ theme }) => theme.typo.B3_R};
    border-bottom: 1px solid gray;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  padding: 14rem 2rem 4.2rem;
`;

const Label = styled.label`
  ${({ theme }) => theme.typo.B3_R};
  width: 34px;
  height: 24px;
`;

const ThemeContent = styled.text`
  ${({ theme }) => theme.typo.B5_R};
  color: gray;
`;

const LogoutContainer = styled.div`
  width: 100%;
  height: 104px;
  padding-top: 15px;
`;

export default MyPage;
