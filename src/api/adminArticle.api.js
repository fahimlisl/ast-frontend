import api from "./axios";

export const createArticle = (data) =>
  api.post("/admin/addArticle", data);

export const updateArticle = (id, data) =>
  api.patch(`/admin/editArticle/${id}`, data);

export const deleteArticle = (id) =>
  api.delete(`/admin/removeArticle/${id}`);

export const fetchAdminArticles = () =>
  api.get("/admin/fetchArticle/list");

export const fetchAdminArticle = (id) =>
  api.get(`/admin/fetchArticle/${id}`);
