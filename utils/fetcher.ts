import axios from "~/utils/axios";

export const fetcher = (url, ...arg) => {
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};
