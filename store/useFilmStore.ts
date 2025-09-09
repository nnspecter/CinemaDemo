import { create } from "zustand";
import axios from "axios";

interface Film {
  id: number | string;
  name: string;
  genre: string;
  imageLink: string;
  duration: number;
  year: number;
  sessions: any;
  description: string;
}

interface Store {
  film: Film | null;
  loading: boolean;
  error: string | null;
  loadFilm: (id: number) => Promise<void>;
}

export const useFilmStore = create<Store>((set) => ({
  film: null,
  error: null,
  loading: false,

  loadFilm: async (id: number) => {
  set({ error: null, loading: true });
  try {
    const response = await axios.get(
      `https://bush-cinema.onrender.com/api/cinema/movies/${id}`
    );
    // у axios данные сразу лежат в response.data
    set({ film: response.data.data, loading: false });
  } catch (err: any) {
    set({ error: err.message, loading: false });
  }
},

}));
