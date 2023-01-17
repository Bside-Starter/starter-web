import { SocialSignInInfoPayload } from "~/constants/types";
import { axiosUtils } from "~/network/axiosUtils";
import defaultRequest from "~/network/defaultRequest";
import { User } from "~/pages/api/signin";

export interface SignInResult {
  user: User;
  token: string;
}

export const requestSocialSignIn = async ({
  pId,
  accessToken,
  provider,
}: SocialSignInInfoPayload): Promise<SignInResult | undefined> => {
  try {
    const response = await defaultRequest<User>({
      method: axiosUtils.POST,
      url: "/api/auth/signin",
      requestBody: {
        pId,
        accessToken,
        provider,
      },
    });
    const { data } = response;
    const token = "temp Token";
    return {
      user: data,
      token,
    };
  } catch (e) {
    console.error(e);
    return {
      user: {
        name: "임다빈",
        age: 30,
        address: "서울",
      },
      token: "temp Token",
    };
  }
};
