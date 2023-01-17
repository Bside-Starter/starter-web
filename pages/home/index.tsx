import { ReactElement } from "react";
import styled from "styled-components";
import { axiosUtils } from "~/network/axiosUtils";
import defaultRequest from "~/network/defaultRequest";
import MainTabLayout from "../../components/MainTabLayout";
import Typo from "../../components/Typo";
import { NextPageWithLayout } from "../_app";
import TextField from "~/components/TextField";

const Home: NextPageWithLayout = () => {
  const handleTestButtonClick = () => {
    try {
      defaultRequest({
        url: "/api/test",
        method: axiosUtils.POST,
        // requestBody: {
        //   test: '잘되나요',
        // },
      }).then((res) => console.log(res));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <button onClick={handleTestButtonClick}>테스트 버튼</button>
      <Typo>메인페이지입니다.</Typo>
      <TextField placeholder={"테스트"} label={"label"} />
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

const Container = styled.div``;

export default Home;
