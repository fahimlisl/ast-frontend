import api from "./axios";

export const userLogin = (data) =>
  api.post("/user/login", data);

export const userSignup = (data) =>
  api.post("/user/register", data, {
    headers: { "Content-Type": "multipart/form-data" }
  });

export const adminLogin = (data) =>
  api.post("/admin/login", data);


export const adminLogout = () => {
  return api.post("/admin/logout");
};
