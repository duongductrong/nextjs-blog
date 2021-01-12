import { AxiosPromise } from "axios";
import axiosInstance from "../axiosInstance";

export interface getAllProps {
  params?: Object | undefined | null;
}

export interface getItemsProps {
  params?: Object | undefined | null;
  aliasOrId: number | string | undefined | null;
}

class PostService {
  getAll<T extends getAllProps>({ params = {}, ...props }: T): AxiosPromise {
    return axiosInstance({
      method: "GET",
      url: "/posts",
      params: params,
      ...props,
    });
  }

  getItem<T extends getItemsProps>({
    params = {},
    aliasOrId = undefined,
    ...props
  }: T): AxiosPromise {
    return axiosInstance({
      method: "GET",
      url: `/posts/${aliasOrId}`,
      params: params,
      ...props,
    });
  }
}

export default new PostService();
