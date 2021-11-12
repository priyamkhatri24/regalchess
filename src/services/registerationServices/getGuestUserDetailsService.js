import httpUserService from "../httpUserService";
import { toast } from "react-toastify";

export async function getGuestUserDashboardDetails() {
  try {
    const { data } = await httpUserService.get(
      "guest",
      `/guest/dashboardDetails`
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
