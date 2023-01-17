import { PropsWithChildren } from "react";
import styled from "styled-components";
import { DeviceInfoPayload } from "~/constants/types";
import { useCommonState } from "~/context/common";

const Layout = ({ children }: PropsWithChildren) => {
  const { deviceInfo } = useCommonState();
  return <StyledLayout deviceInfo={deviceInfo}>{children}</StyledLayout>;
};

const StyledLayout = styled.div<{ deviceInfo: DeviceInfoPayload | null }>`
  padding: ${({ deviceInfo }) =>
      deviceInfo?.platform === "ios"
        ? `${deviceInfo.statusBarHeight / 10}rem`
        : 0}
    0;
  height: 100vh;
`;

export default Layout;
