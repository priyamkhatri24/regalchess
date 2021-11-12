import httpUserService from "./httpUserService";
import { toast } from "react-toastify";

export async function getPuzzle(stake) {
  try {
    const { data } = await httpUserService.get(stake, `/user/getPuzzle`);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
