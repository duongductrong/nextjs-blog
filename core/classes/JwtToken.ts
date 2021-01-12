class JwtToken {
  getToken(context) : string {
    const token = context?.req?.cookies?.access_token || "";

    if (!token) return undefined;

    return atob(token);
  }

  set setToken(token: string) {
    const encodeToken = btoa(token);
    localStorage.setItem("access_token", encodeToken);
  }

  getBearer(context) {
    const bearer = context?.req?.cookies?.bearer;
    if (!bearer) {
      return undefined;
    }

    return atob(bearer);
  }

  set setBearer(bearerName: string) {
    const encodeBearer = btoa(bearerName);
    localStorage.setItem("bearer", encodeBearer);
  }
}

export default new JwtToken();
