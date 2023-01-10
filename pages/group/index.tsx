import { ReactElement } from "react";
import Typo from "~/components/Typo";
import MainTabLayout from "../../components/MainTabLayout";
import { NextPageWithLayout } from "../_app";

const Group: NextPageWithLayout = () => {
  return <Typo>그룹페이지에용</Typo>;
};

Group.getLayout = function getLayout(page: ReactElement) {
  return <MainTabLayout>{page}</MainTabLayout>;
};

export default Group;
