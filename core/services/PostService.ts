import axiosServer from "../axiosServer";

interface getAllProps {
  params?: Object | undefined | null;
}

interface getItemsProps {
  params?: Object | undefined | null;
  id: number | string | undefined | null;
}

class PostService {
  getAll({ params = {}, ...props }: getAllProps): Promise<any> {
    return axiosServer({
      method: "GET",
      url: "/posts",
      params: params,
      ...props,
    });
  }

  getItem({
    params = {},
    id = undefined,
    ...props
  }: getItemsProps): Promise<any> {
    return axiosServer({
      method: "GET",
      url: `/posts/${id}`,
      params: params,
      ...props,
    });
  }
}

export default new PostService();
