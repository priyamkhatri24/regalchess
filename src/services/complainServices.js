import httpUserService from "./httpUserService";
import { toast } from "react-toastify";

export async function postComplain(stake, formData) {
  try {
    if (stake === "coach") {
      const { data } = await httpUserService.post(
        stake,
        `/coach/registerComplain`,
        formData
      );
      toast.success(data.message);
      if (!data.message) toast.success(data);
      return { data };
    } else {
      const { data } = await httpUserService.post(
        stake,
        `/user/registerComplain`,
        formData
      );
      toast.success(data.message);
      if (!data.message) toast.success(data);
      return { data };
    }
  } catch (error) {
    console.log(error);
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
