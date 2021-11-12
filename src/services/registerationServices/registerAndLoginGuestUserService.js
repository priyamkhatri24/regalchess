import httpUserService from "../httpUserService";
import { toast } from "react-toastify";

export async function guestUserRegisterService(formData) {
  try {
    const { data } = await httpUserService.post(
      "user",
      `/guest/registerGuestUser`,
      formData
    );
    if (!data.message) {
      toast.success(data);
    } else toast.success(data.message);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function guestUserLoginService(formData) {
  try {
    const { data, headers } = await httpUserService.post(
      "guest",
      `/guest/login`,
      formData
    );
    localStorage.setItem("guestUserToken", headers["x-auth-token"]);
    if (!data.message) {
      toast.success(data);
    } else toast.success(data.message);
    return { data };
  } catch (error) {
    if (error.response.data.message) {
      toast.error(error.response.data.message);
    } else if (error.response.data) {
      toast.error(error.response.data);
    }
    return { error };
  }
}
