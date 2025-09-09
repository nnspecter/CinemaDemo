import axios from "axios";
import { error } from "console";
import { create } from "zustand";
interface Seans{
    loading: boolean,
    error: string | null,
    sits: Sits[] | null,
    getSeans: (id: number) => Promise<void>
}
interface Sits{
    id: string,
    col: number,
    row: number,
    state: string
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
    }
}))