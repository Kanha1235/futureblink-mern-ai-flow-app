import { axiosInstance } from "../lib/axios";

export const runFlowRequest = async (prompt) => {
  const response = await axiosInstance.post("/flows/run", { prompt });
  return response.data;
};

export const saveFlowRequest = async ({ prompt, response }) => {
  const apiResponse = await axiosInstance.post("/flows/save", { prompt, response });
  return apiResponse.data;
};

export const getHistoryRequest = async () => {
  const response = await axiosInstance.get("/flows/history");
  return response.data;
};
