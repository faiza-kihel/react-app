import http from "./httpService";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/users/login";
export function login(email, password) {
  return http.post(api, { email, password });
}
