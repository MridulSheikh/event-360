import axios from "../../../config/axios";

export const deleteRecentEvent = async (id: string) => {
  const response = await axios.delete(`/recent-event/${id}`);
  return response.data;
};
