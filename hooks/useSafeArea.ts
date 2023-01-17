import { useCommonState } from "~/context/common";
export default function useSafeArea() {
  const { deviceInfo } = useCommonState();
  const safeAreaInset =
    deviceInfo?.platform === "ios"
      ? `${deviceInfo.statusBarHeight / 10}rem`
      : 0;
  0;

  return {
    safeAreaInset,
  };
}
