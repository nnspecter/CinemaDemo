import { create } from "zustand";
interface IdStore{
 filmId: number | null,
 sessionId: number | null,
 setFilmId: (id: number) => void,
 setSessionid: (id: number) => void,
}
export const useIdStore = create<IdStore>((set) => ({
filmId: null,
sessionId: null,
setFilmId: (id) =>{
    set({filmId: id});

},
setSessionid: (id) => {
    set({sessionId: id});
},

}))