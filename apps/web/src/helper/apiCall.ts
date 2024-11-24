import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://kinetix-chi.vercel.app/",
});

export default apiCall;
