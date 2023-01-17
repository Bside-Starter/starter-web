import { colors } from "./../constants/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    -webkit-touch-callout: none;
    /* -webkit-user-select: none; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: ${colors.WHITE}
    }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    ${({ theme }) => theme.typo.H1_B}
  }

  h2 {
    ${({ theme }) => theme.typo.H2_B}
  }

  h3 {
    ${({ theme }) => theme.typo.H3_B}
  }

  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-Bold.otf');
    font-weight: 700;
  }

  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-SemiBold.otf');
    font-weight: 600;
  }

  @font-face {
    font-family: Pretendard;
    src: url('/fonts/Pretendard-Regular.otf');
    font-weight: 400;
  }

  @font-face {
    font-family: PyeongChang;
    src: url('/fonts/PyeongChang-Bold.otf');
    font-weight: 700;
  }

  @font-face {
    font-family: PyeongChang;
    src: url('/fonts/PyeongChang-Regular.otf');
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: NotoSansCJK-KR, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
    border: none;
    box-sizing: border-box;
    background-color: transparent;
  }
`;
