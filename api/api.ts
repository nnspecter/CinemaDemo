import axios from "axios"
import { axiosApi } from "./axiosApi";

//catalog movie
interface Movie {
  id: number;
  name: string;
  genre: string;
  posterUrlPreview?:string;
  posterUrl: string;
  duration: number;
  year: number;
  sessions: MovieSessions[];
  description: string;
}
interface MovieSessions{
    id: number;
    time: string;
}

interface CatalogResponse {
    meta: {
        status: string;
    };
    data: Movie[];
}


//Одно movie
interface MovieResponse {
    meta: {
        status: string;
    };
    data: Movie;
}


//filmSessions
interface Sit {
    id: string;
    col: number;
    row: number;
    state: "FREE" | "TAKEN" | "BOOKED" | "IN_CART";
  }
interface SessionData {
    id: number;
    movieId: number;
    time: string;
    sits: Sit[][];
}

interface SessionResponse {
  meta: {
    status: string;
  };
  data: SessionData;
}


//Функции для получения данных с сервера
export const fetchCatalog = async (): Promise<CatalogResponse> => {
    const res = await axiosApi.get<CatalogResponse>("https://bush-cinema.onrender.com/api/cinema/movies")
    return res.data
}

export const fetchFilm = async (id): Promise<MovieResponse> => {
    const res = await axiosApi.get<MovieResponse>(`https://bush-cinema.onrender.com/api/cinema/movies/${id}`)
    return res.data
}

export const fetchSession = async (sessionId): Promise<SessionResponse> => {
    const res = await axiosApi.get<SessionResponse>(`https://bush-cinema.onrender.com/api/cinema/session/${sessionId}`)
    return res.data
}

