import { create } from "zustand";

interface Movie {
  id: number | string;
  name: string;
  genre: string;
  imageLink: string;
  duration: string;
  year: number;
  sessions: any
}

interface State {
  object: { data: Movie[]} | null;
  loading: boolean;
  error: string | null;
  film: Movie | null;
  loadData: (url: string) => Promise<void>;
  filteredFilm: (id: number | string) => Promise<void>;
  handleTime: (time: string) => boolean;
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
  filteredFilm: async (id: number) => {
  let state = get();

  if (state.object === null) {
    await state.loadData("/api/cinema/movies"); // ждем загрузку
    state = get(); // получаем новое состояние
  }

  if (state.object?.data) {
    const foundFilm = state.object.data.find(el => el.id === id);
    set({ film: foundFilm || null });
  }
},
handleTime: (time: string) => {
  const[hours, minutes] = time.split(":").map(Number)
  const nowH = new Date().getHours()
  const nowM = new Date().getMinutes();
  if(nowH <= hours && nowM < minutes+10){
    return true
  }
  return false
}

}));
