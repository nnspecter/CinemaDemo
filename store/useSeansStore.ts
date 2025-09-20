import axios from "axios";
import { error } from "console";
import { create } from "zustand";
interface Seans{
    loading: boolean,
    error: string | null,
    sits: Sits[][] | null,
    getSeans: (id: number) => Promise<void>,
    clearSeans: () => void,
    handleReserve: (id: string) => Promise<void>,
    handleUnReserve: (id: string) => Promise<void>,
    handleOrder: () => Promise<void>,
}

interface Sits{
    id: string,
    col: number,
    row: number,
    state: "FREE" | "TAKEN" | "BOOKED" | "IN_CART",
}

export const useSeansStore = create<Seans>((set)=>({
    loading: false,
    error: null,
    sits: null,
    getSeans: async (id: number) => {
        try{
            set({loading: true, error: null, sits: null})
            const response = await axios.get(
                `https://bush-cinema.onrender.com/api/cinema/session/${id}`
            )
            set({sits: response.data.data.sits, loading: false, error: null})
        }
        catch(err: any){
            set({sits: null, error: err.message, loading: false})
        }
    },
    clearSeans: () => {
        set({sits: null})
    },
    handleReserve: async (id: string) => {
        try{
            const response = axios.post("https://bush-cinema.onrender.com/api/cinema/sit/reserve", {
                id
            });
            console.log("Ответ сервера post", response);
        }
        catch(err){
            console.error("Ошибка handleReserve: ", err)
        }
    },
    handleUnReserve: async (id: string) => {
        try{
            const response = axios.delete(`https://bush-cinema.onrender.com/api/cinema/sit/cancel/${id}`)
            console.log("Ответ сервера delete", response);
        }
        catch(err){
            console.error("Ошибка handleUnReserve: ", err)
        }
    },
    handleOrder: async()=>{
        try{
            const response = axios.post("https://bush-cinema.onrender.com/api/cinema/post/order");
            console.log("отправлено")
        }
        catch(err){
            console.log("Ошибка при покупке", err)
        }
    }
}))