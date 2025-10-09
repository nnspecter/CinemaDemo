import {useMutation} from "@tanstack/react-query"
import { queryKeys } from "./queryKeys"
import { queryClient } from "./queryClient"
import { axiosApi } from "./axiosApi"

//резерв места
export const useReserve = () => {
    return useMutation({
        mutationFn: (id: string) => axiosApi.post("sit/reserve", {id}),
        onSuccess: ()=> queryClient.invalidateQueries({queryKey: queryKeys.seans}),
        onError: (error) => console.error("Ошибка мутации резерва:", error)
    })
}
//отмена резерва места
export const useUnReserve = () => {
    return useMutation({
        mutationFn: (id: string) => axiosApi.delete(`sit/cancel/${id}`),
        onSuccess: ()=> queryClient.invalidateQueries({queryKey: queryKeys.seans}),
        onError: (error) => console.error("Ошибка отмены резерва:", error)
    })
}
//оформить ззаказ
export const useOrder = () => {
    return useMutation({
        mutationFn: () => axiosApi.post(`post/order`),
        onSuccess: ()=> queryClient.invalidateQueries({queryKey: queryKeys.seans}),
        onError: (error) => console.error("Ошибка заказа:", error),
    })
}