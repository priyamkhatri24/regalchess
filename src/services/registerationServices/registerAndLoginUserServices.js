import httpUserService from "../httpUserService";
import { toast } from "react-toastify";

export async function userRegisterService(formData) {
  try {
    const { data } = await httpUserService.post(
      "user",
      `/user/registerUser`,
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

export async function userLoginService(formData) {
  try {
    const { data, headers } = await httpUserService.post(
      "user",
      `/user/login`,
      formData
    );
    await localStorage.removeItem("userToken");
    await localStorage.setItem("userToken", headers["x-auth-token"]);
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

export async function addUserName(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/user/addUserName`,
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

export async function otpVerification(stake, formData) {
  try {
    const { data, headers } = await httpUserService.post(
      stake,
      `/user/otpVerification`,
      formData
    );

    if (data) {
      if (stake === "user") {
        await localStorage.setItem("userToken", headers["x-auth-token"]);
      }
      if (stake === "guest") {
        await localStorage.setItem("guestUserToken", headers["x-auth-token"]);
      }

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

export async function otpGeneration(email) {
  try {
    const { data } = await httpUserService.post("user", `/user/otpGeneration`, {
      email: email,
    });

    if (!data.message) {
      toast.success(data);
    } else toast.success(data.message);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function resetPassword(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/user/resetPassword`,
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
      `/user/changePassword`,
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

export async function getSchoolAndAreaNames() {
  try {
    const { data } = await httpUserService.get(
      "user",
      `/admin/schoolAndAreaList`
    );
    if (data.message) toast.success(data.message);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function getUserNameList() {
  try {
    const { data } = await httpUserService.get(
      "user",
      `/admin/userNameSuggestionsList`
    );
    if (data.message) toast.success(data.message);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
