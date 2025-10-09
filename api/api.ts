import axios from "axios"

export const fetchCatalog = async () => {
    const res = await axios.get("https://bush-cinema.onrender.com/api/cinema/movies")
    return res.data
}

export const fetchFilm = async (id) => {
    const res = await axios.get(`https://bush-cinema.onrender.com/api/cinema/movies/${id}`)
    return res.data
}

export const fetchSession = async (sessionId) => {
    const res = await axios.get(`https://bush-cinema.onrender.com/api/cinema/session/${sessionId}`)
    return res.data
}

