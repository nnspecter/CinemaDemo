import { create } from "zustand";

interface Movie {
  id: number | string;
  name: string;
  genre: string;
  imageLink: string;
  duration: number;
  year: number;
  sessions: any
  description: string;
}

interface State {
  object: { data: Movie[]} | null;
  loading: boolean;
  error: string | null;
  film: Movie | null;
  loadData: (url: string) => Promise<void>;
  handleTime: (time: string) => boolean;
  updateFilm: (data: Movie) => void
}

export const useStore = create<State>((set, get) => ({
  object: null,
  loading: false,
  error: null,
  film: null,

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
handleTime: (time: string) => {
  const[hours, minutes] = time.split(":").map(Number)
  const nowH = new Date().getHours()
  const nowM = new Date().getMinutes();
  if(nowH <= hours){
    return true
  }
  return false
},
updateFilm: (data: Movie) =>{
  set({film: data})
}

}));
