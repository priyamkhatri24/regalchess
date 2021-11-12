import httpUserService from "../httpUserService";
import { toast } from "react-toastify";

export async function getUserDashboardDetails() {
  try {
    const { data } = await httpUserService.get(
      "user",
      `/user/dashboardDetails`
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function getUserProfileDetails(formData) {
  try {
    const { data } = await httpUserService.get(
      "user",
      `/user/myProfileDetails`
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function editProfileService(formData) {
  console.log(formData);
  try {
    const { data } = await httpUserService.post(
      "user",
      `/user/editProfile`,
      formData
    );
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
