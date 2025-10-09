import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "./queryKeys"
import { fetchCatalog, fetchFilm, fetchSession } from "./api"

export const useCatalogQuery = () => {
    return useQuery({
        queryKey: queryKeys.catalog,
        queryFn: fetchCatalog,
    })
}
// Отдельный фильм по его id (1, 2, 3...)
export const useFilmQuery = (id: number) => {
    return useQuery({
        queryKey: [queryKeys.film, id],
        queryFn: () => fetchFilm(id),
        enabled: !!id,
        staleTime: Infinity,         // данные не устаревают
        refetchOnWindowFocus: false, // не обновлять при возврате на вкладку
        refetchOnMount: false,       // не дергать API при повторном монтировании
    })
}
//Получить места  по id сеанса (1, 2, 3...)
export const useSessionQuery = (id: number) => {
    return useQuery({
        queryKey: [queryKeys.seans, id],
        queryFn: () => fetchSession(id),
        enabled: !!id,
    })
}
