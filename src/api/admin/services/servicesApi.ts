import axios from "../../../config/axios";

export type TDataService = {
  title: string;
  img: string;
  discription: string;
};

export const createServiceApi = async (data: TDataService) => {
  const response = await axios.post(`/service`, data);
  return response.data;
};

export const deleteServiceApi = async (id: string) => {
  const response = await axios.delete(`/service/${id}`);
  return response.data;
};

export const updateServiceApi = async (id: string, data: TDataService) => {
  const response = await axios.patch(`/service/${id}`, data);
  return response.data;
};
