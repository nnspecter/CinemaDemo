import { create } from "zustand";

// Типизация (можно упростить, если без TS)
interface Movie {
  id: number;
  name: string;
  genre: string;
  imageLink: string;
  duration: string;
  year: number;
}

interface State {
  object: { data: Movie[]} | null;
  loading: boolean;
  error: string | null;
  loadData: (url: string) => Promise<void>;
}

export const useStore = create<State>((set) => ({
  object: null,
  loading: false,
  error: null,

  loadData: async (url: string) => {
    set({ loading: true, error: null }); // перед началом запроса

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Ошибка загрузки данных");

      const result = await response.json();
      set({ object: result, loading: false }); // записали результат
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
