// api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "https://bush-cinema.onrender.com/api/cinema",
  withCredentials: true, // всегда отправлять куки
});
