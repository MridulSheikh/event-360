import axios from "../../../config/axios";
type TData = {
  title: string;
  img: string;
};

export const postEventItem = async (data: TData) => {
  const response = await axios.post(`/event-item`, data);
  return response.data;
};

export const deleteEventItem = async (id: string) => {
  const response = await axios.delete(`/event-item/${id}`);
  return response.data;
};

export const updateEventItem = async (id: string, data: TData) => {
  const response = await axios.patch(`/event-item/${id}`, data);
  return response.data;
};
