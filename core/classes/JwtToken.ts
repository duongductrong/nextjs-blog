import Cookies, { CookieAttributes } from "js-cookie";

export type ContextRequest = "client" | "server";
class JwtToken {
  getTokenClient(): string {
    const token = document.cookie
      .split(";")
      ?.find((cookie) => cookie.indexOf("access_token") !== -1)
      ?.split("=")[1];

    if (!token) return undefined;

    return atob(token);
  }

  setTokenClient(token: string, cookieConfig: CookieAttributes) {
    const encodeToken = btoa(token);
    Cookies.set("access_token", encodeToken, { ...cookieConfig });
  }

  getBearerClient(): string {
    const bearer = document.cookie
      .split(";")
      ?.find((cookie) => cookie.indexOf("token_type") !== -1)
      ?.split("=")[1];
    if (!bearer) {
      return undefined;
    }

    return atob(bearer);
  }

  setBearerClient(bearerName: string, cookieConfig: CookieAttributes) {
    const encodeBearer = btoa(bearerName);
    Cookies.set("token_type", encodeBearer, { ...cookieConfig });
  }

  getTokenServer(context): string {
    const token = context?.req?.cookies?.access_token || "";

    if (!token) return undefined;

    return Buffer.from(token, "base64").toString("ascii");
  }

  getBearerServer(context) {
    const bearer = context?.req?.cookies?.token_type;
    if (!bearer) {
      return undefined;
    }

    return Buffer.from(bearer, "base64").toString("ascii");
  }

  authorization(context: ContextRequest, contextServerNextJs: any): string {
    switch (context) {
      case "client":
        return `${this.getBearerClient()} ${this.getTokenClient()}`;
      case "server":
        return `${this.getBearerServer(
          contextServerNextJs
        )} ${this.getTokenServer(contextServerNextJs)}`;
      default:
        return "Not found";
    }
  }
}

export default new JwtToken();
