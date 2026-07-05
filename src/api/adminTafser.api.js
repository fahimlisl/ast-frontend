import api from "./axios.js";

export const fetchSurahList = () =>
  api.get("/admin/fetchTafserList");

export const fetchSurah = (id) =>
  api.get(`/admin/fetchTafser/${id}`);

export const updateExplanation = (ayahId, explanation) =>
  api.patch(`/admin/editAyahExplanation/${ayahId}`, { explanation });

export const addShortMeaning = (ayahId, shortMeaning) =>
  api.patch(`/admin/addshortMeaning/${ayahId}`, { shortMeaning });

export const markSurahCompleted = (id) =>
  api.patch(`/admin/isPending/${id}`);

export const editShortMeaning = (ayahId, index, shortMeaning) =>
  api.patch(`/admin/editShortmeaning/${ayahId}`, {
    index,
    shortMeaning,
  });
