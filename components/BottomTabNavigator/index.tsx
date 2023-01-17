import styled from "styled-components";
import { bottomTabList } from "~/constants";
import useSafeArea from "~/hooks/useSafeArea";
import strings from "../../constants/strings";
import { useRouter } from "next/router";

const BottomTabNavigator = () => {
  const router = useRouter();
  const { safeAreaInset } = useSafeArea();

  const renderBottomTabButton = bottomTabList.map((v) => {
    const handleBottomTabClick = () => {
      // clearNavigation({ nextUrl: v.to });
      router.push(v.to);
    };

    const handleAddButtonClick = () => {};

    if (v.title === strings.ADD) {
      return (
        <AddButton onClick={handleAddButtonClick} key={v.title}></AddButton>
      );
    }
    return <TabButton onClick={handleBottomTabClick} key={v.title}></TabButton>;
  });
  return (
    <>
      <Container safeAreaInset={safeAreaInset}>
        {renderBottomTabButton}
      </Container>
      <SafeArea safeAreaInset={safeAreaInset} />
    </>
  );
};

const Container = styled.div<{ safeAreaInset: string | number }>`
  width: 100%;
  height: 5.5rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: ${({ safeAreaInset }) => safeAreaInset};
  left: 0;
  background-image: url("/images/bottom_navi.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const SafeArea = styled.div<{ safeAreaInset: string | number }>`
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  height: ${({ safeAreaInset }) => safeAreaInset};
  background-color: #121212;
`;

const TabButton = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid black;
  background-image: url("data:image/svg+xml,%3Csvg width='100%' height='100%' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.7022 3.99192C21.2178 3.01477 22.5715 2.31691 23.6791 1.93221C24.3737 1.69098 24.9322 1.58693 25.352 1.59197C25.7677 1.59696 25.9796 1.70573 26.0919 1.81803C26.2717 1.99785 26.4331 2.44861 26.2102 3.43223C25.9971 4.37259 25.4744 5.58946 24.6516 7.01064C24.4274 7.39781 24.1827 7.79733 23.9182 8.20745C23.426 7.35547 22.8155 6.55313 22.0866 5.82429C21.3574 5.09509 20.5546 4.4843 19.7022 3.99192ZM18.127 3.23654C19.9992 1.96253 21.7341 1.01983 23.187 0.515233C23.9709 0.242987 24.7122 0.0841806 25.37 0.0920782C26.0318 0.100025 26.6752 0.279986 27.1526 0.757369C27.9056 1.51035 27.9239 2.65713 27.6731 3.76378C27.4125 4.91368 26.808 6.27977 25.9497 7.7622C25.5755 8.40861 25.1488 9.08436 24.6738 9.78239C26.2752 13.9024 25.4128 18.7595 22.0866 22.0857C18.7605 25.4118 13.9036 26.2742 9.78362 24.6729C9.08515 25.1483 8.40899 25.5753 7.7622 25.9497C6.27977 26.808 4.91368 27.4125 3.76378 27.6731C2.65713 27.9239 1.51034 27.9056 0.757367 27.1526C0.290037 26.6852 0.107563 26.0583 0.0927989 25.4114C0.0781407 24.7693 0.225097 24.0474 0.481614 23.2853C0.978057 21.8105 1.93555 20.0387 3.23737 18.1258C1.63688 14.0061 2.4995 9.15003 5.82523 5.82429C9.15104 2.49848 14.0073 1.6359 18.127 3.23654ZM3.99271 19.701C2.98903 21.2575 2.28088 22.6419 1.90324 23.7639C1.67732 24.435 1.58319 24.9732 1.59241 25.3772C1.60152 25.7765 1.7079 25.9818 1.81803 26.0919C1.99784 26.2717 2.44861 26.4331 3.43223 26.2102C4.37259 25.9971 5.58946 25.4744 7.01064 24.6516C7.39819 24.4272 7.79812 24.1822 8.20867 23.9175C7.35659 23.4252 6.55415 22.8146 5.82523 22.0857C5.09595 21.3564 4.48511 20.5535 3.99271 19.701ZM11.295 23.5947C14.6492 24.5173 18.3903 23.6607 21.026 21.025C23.6617 18.3893 24.5183 14.648 23.5956 11.2938C22.0294 13.3956 20.0841 15.6424 17.8632 17.8632C15.6428 20.0837 13.3964 22.0286 11.295 23.5947ZM22.965 9.61196C21.3678 11.8576 19.2679 14.3373 16.8026 16.8026C14.3377 19.2675 11.8585 21.3671 9.61313 22.9642C8.62739 22.489 7.70346 21.8426 6.8859 21.025C2.98122 17.1203 2.98122 10.7896 6.8859 6.88495C10.7906 2.98028 17.1213 2.98028 21.026 6.88495C21.8435 7.70245 22.4898 8.6263 22.965 9.61196Z' fill='white'/%3E%3C/svg%3E%0A");
`;

const AddButton = styled.button`
  // TODO: 반응형 고려 필요
  margin-bottom: 4.8rem;
  width: 4.8rem;
  height: 4.8rem;
  border: 1px solid black;
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='48' height='48' rx='24' fill='white'/%3E%3Cpath d='M32.75 22.75H25.25V15.25C25.25 14.9185 25.1183 14.6005 24.8839 14.3661C24.6495 14.1317 24.3315 14 24 14C23.6685 14 23.3505 14.1317 23.1161 14.3661C22.8817 14.6005 22.75 14.9185 22.75 15.25V22.75H15.25C14.9185 22.75 14.6005 22.8817 14.3661 23.1161C14.1317 23.3505 14 23.6685 14 24C14 24.3315 14.1317 24.6495 14.3661 24.8839C14.6005 25.1183 14.9185 25.25 15.25 25.25H22.75V32.75C22.75 33.0815 22.8817 33.3995 23.1161 33.6339C23.3505 33.8683 23.6685 34 24 34C24.3315 34 24.6495 33.8683 24.8839 33.6339C25.1183 33.3995 25.25 33.0815 25.25 32.75V25.25H32.75C33.0815 25.25 33.3995 25.1183 33.6339 24.8839C33.8683 24.6495 34 24.3315 34 24C34 23.6685 33.8683 23.3505 33.6339 23.1161C33.3995 22.8817 33.0815 22.75 32.75 22.75Z' fill='%23121212'/%3E%3C/svg%3E%0A");
`;

export default BottomTabNavigator;
