import api from "./axios.js";

export const createKhutba = (data) =>
  api.post("/admin/addKhutba", data);

export const updateKhutba = (id, data) =>
  api.patch(`/admin/editKhutba/${id}`, data);

export const deleteKhutba = (id) =>
  api.delete(`/admin/removeKhutba/${id}`);

export const fetchAdminKhutbas = () =>
  api.get("/admin/fetchKhutba/list");

export const fetchAdminKhutba = (id) =>
  api.get(`/admin/fetchKhutba/${id}`);
