import api from "./axios.js";

export const getArticleList = () =>
  api.get("/general/article/list");

export const getArticleById = (id) =>
  api.get(`/general/article/${id}`);
