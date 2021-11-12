import httpUserService from "../httpUserService";
import { toast } from "react-toastify";

export async function coachLoginService(formData) {
  try {
    const { data, headers } = await httpUserService.post(
      "coach",
      `/coach/login`,
      formData
    );
    await localStorage.removeItem("coachToken");
    await localStorage.setItem("coachToken", headers["x-auth-token"]);
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

export async function otpGeneration(email) {
  try {
    const { data } = await httpUserService.post(
      "coach",
      `/coach/otpGeneration`,
      {
        email: email,
      }
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

export async function otpVerification(formData) {
  try {
    const { data, headers } = await httpUserService.post(
      "coach",
      `/coach/otpVerification`,
      formData
    );
    if (data) {
      await localStorage.setItem("coachToken", headers["x-auth-token"]);
      if (!data.message) {
        toast.success(data);
      } else toast.success(data.message);
      return { data };
    }
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function resetPassword(formData) {
  try {
    const { data } = await httpUserService.post(
      "coach",
      `/coach/resetPassword`,
      formData
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
export async function changePassword(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/coach/changePassword`,
      formData
    );

    if (!data.message) {
      toast.success(data);
    }
    toast.success(data.message);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function getCoachDashboardDetails() {
  try {
    const { data } = await httpUserService.get(
      "coach",
      `/coach/dashboardDetails`
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
