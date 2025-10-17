import { create } from "zustand";
import { api } from "./api"; // импорт axiosInstance

interface Seans {
  seansID: number | null;
  loading: boolean;
  error: string | null;
  sits: Sits[][] | null;
  getSeans: (id: number) => Promise<void>;
  clearSeans: () => void;
  handleReserve: (id: string) => Promise<void>;
  handleUnReserve: (id: string) => Promise<void>;
  handleOrder: () => Promise<void>;
}

interface Sits {
  id: string;
  col: number;
  row: number;
  state: "FREE" | "TAKEN" | "BOOKED" | "IN_CART";
}

export const useSeansStore = create<Seans>((set) => ({
  seansID: null,
  loading: false,
  error: null,
  sits: null,

  getSeans: async (id: number) => {
    try {
      set({ loading: true, error: null, sits: null });
      const response = await api.get(`/session/${id}`);
      set({
        sits: response.data.data.sits,
        loading: false,
        error: null,
        seansID: response.data.data.id,
      });
    } catch (err: any) {
      set({ sits: null, error: err.message, loading: false });
    }
  },

  clearSeans: () => {
    set({ sits: null });
  },

  handleReserve: async (id: string) => {
    try {
      const response = await api.post("/sit/reserve", { id });
      console.log(api.defaults.headers, {id})
      console.log("Ответ сервера post", response);
    } catch (err) {
      console.error("Ошибка handleReserve: ", err);
    }
  },

  handleUnReserve: async (id: string) => {
    try {
      const response = await api.delete(`/sit/cancel/${id}`);
      console.log("Ответ сервера delete", response);
    } catch (err) {
      console.error("Ошибка handleUnReserve: ", err);
    }
  },

  handleOrder: async () => {
    try {
      const response = await api.post("/post/order");
      console.log("отправлено", response);
    } catch (err) {
      console.log("Ошибка при покупке", err);
    }
  },
}));
