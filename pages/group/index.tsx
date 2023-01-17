import { ReactElement } from "react";
import styled from "styled-components";
import Card from "~/components/Card";
import Header from "~/components/Header";
import Icon, { ArrowRight } from "~/components/Icon";
import Spacing from "~/components/Spacing";
import { useInterface } from "~/utils/interface";
import MainTabLayout from "../../components/MainTabLayout";
import { NextPageWithLayout } from "../_app";

const Group: NextPageWithLayout = () => {
  const { pushNavigation } = useInterface();

  const handleCreateGroupClick = () => {};

  const handleEnterCodeClick = () => {};
  return (
    <div>
      <Header title={"그룹페이지"} backButtonShown={false} />
      <Main>
        <Title>{"소근방"}</Title>
        <h3>{"우리만의 기록을 담는 곳"}</h3>
        <Spacing space={64} />
        <Card onClick={handleCreateGroupClick}>
          <CardContent>
            <span>내 소근방 만들기</span>
            <Icon icon={ArrowRight} color={"WHITE"} />
          </CardContent>
        </Card>
        <Spacing space={30} />
        <Card onClick={handleEnterCodeClick}>
          <CardContent>
            <span>내 소근방 만들기</span>
            <Icon icon={ArrowRight} color={"WHITE"} />
          </CardContent>
        </Card>
      </Main>
    </div>
  );
};

const Main = styled.main`
  margin-top: 2.4rem;
  padding: 2rem;
`;

const Title = styled.h1`
  font-weight: 400;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 6.1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.typo.B2_SB};
`;

Group.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

export default Group;
