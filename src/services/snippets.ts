// import { endpoints } from "../constants/endpoints";
import { ISnippet } from "../interfaces/snippetInterface";
import { http } from "../utils/http";

/**
 * get snippet
 * @param key
 * @returns
 */
export const getSnippet = (key: string): Promise<unknown> => {
  return http.get(`${key}`);
};

/**
 * save snippet
 * @param data
 * @returns
 */
export const saveSnippet = (data: ISnippet): Promise<unknown> => {
  return http.post("/", data);
};
