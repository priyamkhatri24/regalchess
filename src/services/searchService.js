import httpUserService from "./httpUserService";
import { toast } from "react-toastify";

export async function getFiveUsersAccordingToSearchKey(
  stake,
  searchKey,
  numberOfUsers
) {
  try {
    const { data } = await httpUserService.get(
      stake,
      `/getUserNameList/${searchKey}?limit=${numberOfUsers}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function getUsersAccordingToSearchKey(stake, searchKey) {
  try {
    const { data } = await httpUserService.get(
      stake,
      `/getUserNameList/${searchKey}`
    );

    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
