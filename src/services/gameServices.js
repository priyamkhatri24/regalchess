import httpUserService from "./httpUserService";
import { toast } from "react-toastify";

export async function getBestMove(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/user/getBestMove`,
      formData
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
