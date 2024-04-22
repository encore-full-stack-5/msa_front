//api/auth.js

import { api } from "../config/network";

export const register = async (data) => {
  const res = await api("/api/v1/auth/signup", "post", data);

  return res;
};

export const login = async (data) => {
  const res = await api("/api/v1/auth/login", "post", data);

  return res;
};
