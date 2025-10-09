import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://bush-cinema.onrender.com/api/cinema",
  withCredentials: true, 
});