import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1) Создаём thunk для загрузки фильмов
export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (_, thunkAPI) => {
        try {
            const response = await fetch(
                "/api/cinema/movies"
            );
            if (!response.ok) throw new Error("Ошибка загрузки");
            return await response.json();
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

// 2) Тип состояния
interface FilmState {
    items: any[];
    loading: boolean;
    error: string | null;
}

// 3) Начальное состояние
const initialState: FilmState = {
    items: [],
    error: null,
    loading: false,
};

// 4) Slice
const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    (action.payload as string) ||
                    action.error.message ||
                    "Ошибка загрузки";
            });
    },
});

// 5) Экспорт
export default filmsSlice.reducer;
