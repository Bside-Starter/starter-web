import { User } from "~/pages/api/signin";
export enum WebViewMessageType {
  WEB_LOADED = "WEB_LOADED",
  INITIALIZED = "INITIALIZED",
  AUTH_TOKEN = "AUTH_TOKEN",
  SESSION_CHECK = "SESSION_CHECK",
  SOCIAL_SIGN_IN = "SOCIAL_SIGN_IN",
  SOCIAL_SIGN_IN_RESULT = "SOCIAL_SIGN_IN_RESULT",
  SIGN_IN_COMPLETE = "SIGN_IN_COMPLETE",
  DEVICE_INFO = "DEVICE_INFO",
  PUSH_NAVIGATION = "PUSH_NAVIGATION",
  REPLACE_NAVIGATION = "REPLACE_NAVIGATION",
  POP_NAVIGATION = "POP_NAVIGATION",
  CLEAR_NAVIGATION = "CLEAR_NAVIGATION",
  GO_BACK = "GO_BACK",
}

export interface WebViewMessage<T> {
  type: WebViewMessageType;
  payload: T;
}

export interface AuthTokenPayload {
  token: string | null;
}

export type SocialProvider = "kakao" | "naver" | "google" | "apple";

export interface SocialSignInPayload {
  provider: SocialProvider;
}

export interface SocialSignInInfoPayload extends SocialSignInPayload {
  pId: string;
  accessToken: string;
}

export type Platform = "ios" | "android";

export interface DeviceInfoPayload {
  platform: Platform;
  statusBarHeight: number;
}

export interface RoutePayload {
  url: string;
}

export type SocialType = "kakao" | "google" | "apple";

export interface SocialSignInResultPayload {
  provider: SocialType;
  accessToken: string;
  pId: string;
}

export type ValueOf<T> = T[keyof T];
