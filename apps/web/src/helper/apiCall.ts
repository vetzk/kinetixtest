import axios from "axios";

const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export default apiCall;
