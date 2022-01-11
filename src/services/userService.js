import http from "./httpService";
import { apiEndpoint } from "../config.json";

const api = apiEndpoint + "/users";
export function register(user) {
  return http.post(api, {
    emai: user.username,
    password: user.password,
    name: user.name,
  });
}

