import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use((req: unknown) => {
//   if (getAccessToken())
//     req.headers.authorization = `Bearer ${getAccessToken()}`;

//   return req;
// });

export function get<P>(url: string, params?: P): Promise<unknown> {
  return http({
    method: "get",
    url,
    params,
  });
}

export function post<D, P>(url: string, data: D, params?: P): unknown {
  return http({
    method: "post",
    url,
    data,
    params,
  });
}

export function postFile<D, P>(url: string, data: D, params?: P): unknown {
  return http({
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    url,
    data,
    params,
  });
}

export function put<D, P>(url: string, data: D, params?: P): unknown {
  return http({
    method: "put",
    url,
    data,
    params,
  });
}

export function patch<D, P>(url: string, data: D, params?: P): unknown {
  return http({
    method: "patch",
    url,
    data,
    params,
  });
}

export function remove<D, P>(url: string, data?: D, params?: P): unknown {
  return http({
    method: "delete",
    url,
    data,
    params,
  });
}
