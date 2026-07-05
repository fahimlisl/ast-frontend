import api from "./axios.js";

export const getKhutbaList = () => {
  return api.get("/general/khutba/list");
};

export const increaseKhutbaView = (id) => {
  return api.patch(`/general/viewInKhutba/${id}`);
};
