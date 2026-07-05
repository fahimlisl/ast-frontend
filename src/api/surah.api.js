import api from "./axios.js";

export const getSurahList = () =>
  api.get("/general/tafser/list")

export const getSurahById = (id) =>
  api.get(`/general/tafser/${id}`)
