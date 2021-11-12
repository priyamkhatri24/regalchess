import httpUserService from "./httpUserService";
import { toast } from "react-toastify";

export async function getMyFriendRequests(stake) {
  try {
    const { data } = await httpUserService.get(stake, `/user/myFriendRequests`);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function sendFriendRequest(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/user/sendFriendRequest`,
      formData
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function rejectFriendRequest(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/user/rejectFriendRequest`,
      formData
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function acceptFriendRequest(stake, formData) {
  try {
    const { data } = await httpUserService.post(
      stake,
      `/user/acceptFriendRequest`,
      formData
    );
    return data;
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function getMyFriendList(stake) {
  try {
    const { data } = await httpUserService.get(stake, `/user/myFriendList`);

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
