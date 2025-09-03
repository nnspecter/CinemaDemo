import { createAsyncThunk } from "@reduxjs/toolkit";


export const reduxFetch = (name: string, url: string) => 
    createAsyncThunk(name, async (_, thunkAPI) =>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            return data
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)