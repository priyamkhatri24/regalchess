import axios from "axios";
import { toast } from "react-toastify";

const httpClient = axios.create();
httpClient.defaults.baseURL = process.env.REACT_APP_APIENDPOINT;

const errorCallBack = (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("logging the error", error);
    toast.error("an unexpected error occured");
  }
  return Promise.reject(error);
};

//const setAxios = async (userToken) => {};

//intercept errors while communicating with backend server
httpClient.interceptors.response.use(null, errorCallBack);

const get = async (stake = "user", url) => {
  let token;
  if (stake === "user") token = "userToken";
  if (stake === "guest") token = "guestUserToken";
  if (stake === "coach") token = "coachToken";
  let getInterceptor = await httpClient.interceptors.request.use(
    async (req) => {
      let tokenPresent = await localStorage.getItem(token);
      if (tokenPresent)
        await (req.headers["x-auth-token"] = await localStorage.getItem(token));
      return req;
    }
  );
  const data = await httpClient.get(url);
  httpClient.interceptors.request.eject(getInterceptor);
  return data;
};

const post = async (stake, url, formData) => {
  let token;
  if (stake === "user") token = "userToken";
  if (stake === "guest") token = "guestUserToken";
  if (stake === "coach") token = "coachToken";
  let postInterceptor = await httpClient.interceptors.request.use(
    async (req) => {
      let tokenPresent = await localStorage.getItem(token);
      if (tokenPresent)
        await (req.headers["x-auth-token"] = await localStorage.getItem(token));
      return req;
    }
  );
  const data = await httpClient.post(url, formData);
  httpClient.interceptors.request.eject(postInterceptor);
  return data;
};

export default {
  get,
  post,
  put: axios.put,
  delete: axios.delete,
};
