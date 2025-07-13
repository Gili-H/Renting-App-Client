import axios from "axios";

const API_URL = "http://localhost:3000/api/costumes";

export const getAllCostumes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createCostume = async (costume) => {
  return await axios.post(API_URL, costume);
};

export const deleteCostume = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
