export type HeadingTypoType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading7";

export type BodyTypoType = "body1" | "body2" | "body3" | "body4" | "body5";

export type FontSizeType = HeadingTypoType | BodyTypoType;

export const fontWeights = {
  REGULAR: 400,
  SEMI_BOLD: 600,
  BOLD: 700,
};

export enum FontType {
  Pretendard = "Pretendard",
  PyeongChang = "PyeongChang",
}

export type FontWeightType = (typeof fontWeights)[keyof typeof fontWeights];

const getTypo = (
  size: FontSizeType,
  weight: FontWeightType,
  fontType = FontType.Pretendard
) => {
  const { fontFamily, fontSize, lineHeight, fontWeight } = getFontTypo(
    size,
    weight,
    fontType
  );
  return `font-family: ${fontFamily}; font-size: ${fontSize}rem; line-height: ${lineHeight}rem; font-weight: ${fontWeight}`;
};

const getFontTypo: (
  size: FontSizeType,
  weight: FontWeightType,
  fontType?: FontType
) => {
  fontFamily: FontType;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
} = (size, weight, fontType = FontType.Pretendard) => {
  const fontFamily = fontType;
  const fontWeight = weight;
  let fontSize = 1.6;
  let lineHeight = 2.4;
  switch (size) {
    case "heading1":
      fontSize = 3.6;
      lineHeight = 5.4;
      break;
    case "heading2":
      fontSize = 3;
      lineHeight = 4.6;
      break;
    case "heading3":
      fontSize = 2.6;
      lineHeight = 3.8;
      break;
    case "body1":
      fontSize = 2.2;
      lineHeight = 3.4;
      break;
    case "body2":
      fontSize = 1.8;
      lineHeight = 2.8;
      break;
    case "body3":
      fontSize = 1.6;
      lineHeight = 2.4;
      break;
    case "body4":
      fontSize = 1.4;
      lineHeight = 2.2;
      break;
    case "body5":
      fontSize = 1.2;
      lineHeight = 1.8;
      break;
    default:
      break;
  }
  return { fontFamily, fontSize, lineHeight, fontWeight };
};

export const colors = {
  NEGATIVE1: "#FF3364",
  POSITIVE1: "#2B8CFF",
  GRAY1: "#2C2C2C",
  GRAY2: "#585C62",
  GRAY3: "#7F848B",
  GRAY4: "#AAB0BA",
  GRAY5: "#C6CCD6",
  GRAY6: "#D6DDE8",
  GRAY7: "#E4EAF2",
  GRAY8: "#EEF4FC",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
} as const;

export const typo = {
  H1_B: getTypo("heading1", fontWeights.BOLD),
  H1_R: getTypo("heading1", fontWeights.REGULAR),
  H2_B: getTypo("heading2", fontWeights.BOLD),
  H2_R: getTypo("heading2", fontWeights.REGULAR),
  H3_B: getTypo("heading3", fontWeights.BOLD),
  H3_R: getTypo("heading3", fontWeights.REGULAR),
  B1_R: getTypo("body1", fontWeights.REGULAR),
  B1_SB: getTypo("body1", fontWeights.SEMI_BOLD),
  B2_R: getTypo("body2", fontWeights.REGULAR),
  B2_SB: getTypo("body2", fontWeights.SEMI_BOLD),
  B3_R: getTypo("body3", fontWeights.REGULAR),
  B3_SB: getTypo("body3", fontWeights.SEMI_BOLD),
  B4_R: getTypo("body4", fontWeights.REGULAR),
  B4_SB: getTypo("body4", fontWeights.SEMI_BOLD),
  B5_R: getTypo("body5", fontWeights.REGULAR),
  B5_SB: getTypo("body5", fontWeights.SEMI_BOLD),
  H1_B_PC: getTypo("heading1", fontWeights.BOLD, FontType.PyeongChang),
  H1_R_PC: getTypo("heading1", fontWeights.REGULAR, FontType.PyeongChang),
  H2_B_PC: getTypo("heading2", fontWeights.BOLD, FontType.PyeongChang),
  H2_R_PC: getTypo("heading2", fontWeights.REGULAR, FontType.PyeongChang),
  B1_B_PC: getTypo("body1", fontWeights.BOLD, FontType.PyeongChang),
  B1_R_PC: getTypo("body1", fontWeights.REGULAR, FontType.PyeongChang),
  B2_B_PC: getTypo("body2", fontWeights.BOLD, FontType.PyeongChang),
  B2_R_PC: getTypo("body2", fontWeights.REGULAR, FontType.PyeongChang),
} as const;

export const appTheme = { colors, typo };

export type Theme = typeof appTheme;

export type ColorsType = keyof typeof colors;

export type TypoType = keyof typeof typo;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
