import { Fragment, PropsWithChildren } from "react";
import styled from "styled-components";
import BottomTabNavigator from "../BottomTabNavigator";

const MainTab = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <Main>{children}</Main>
      <BottomTabNavigator />
    </Fragment>
  );
};

const Main = styled.div`
  width: 100vw;
  //padding-bottom: 7.2rem;
`;

export default MainTab;
