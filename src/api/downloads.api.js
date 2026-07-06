import api from "./axios";

export const getDownloadList = () => api.get("/general/download/list");
export const increaseDownloadView = (id) => api.patch(`/general/viewDownload/${id}`);