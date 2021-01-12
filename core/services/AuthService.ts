import { AxiosPromise } from "axios";
import axiosInstance from "../axiosInstance";
import JwtToken, { ContextRequest } from "../classes/JwtToken";

export interface MeProps {
  params?: Object;
  context: ContextRequest;
  contextServerNextJs?: any;
}

interface LoginProps {
  username: string;
  password: string;
  params?: Object;
}

class AuthService {
  me({
    params,
    context,
    contextServerNextJs,
    ...props
  }: MeProps): AxiosPromise {
    return axiosInstance({
      method: "POST",
      url: "/me",
      params: params,
      headers: {
        Authorization: JwtToken.authorization(context, contextServerNextJs),
      },
      ...props,
    }).catch(() => Promise.resolve(null));
  }

  login({ username, password, params }: LoginProps) {
    return axiosInstance({
      method: "POST",
      url: "/login",
      params: params,
      data: {
        username: username,
        password: password,
      },
    }).then((response: any) => {
      // set bearer
      JwtToken.setBearerClient(response?.token_type, {
        expires: response?.expires_in,
      });

      // set token
      JwtToken.setTokenClient(response?.access_token, {
        expires: response?.expires_in,
      });
      return response;
    });
  }
}

export default new AuthService();
