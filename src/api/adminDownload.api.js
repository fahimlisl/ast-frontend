import api from "./axios";

export const fetchAdminDownloads = () => api.get("/admin/fetchDownload/list");
export const fetchAdminDownload = (id) => api.get(`/admin/fetchDownload/${id}`);
export const createDownload = (data) => api.post("/admin/addDownlaod", data);
export const updateDownload = (id, data) => api.patch(`/admin/editDownload/${id}`, data);
export const deleteDownload = (id) => api.delete(`/admin/removeDownload/${id}`);