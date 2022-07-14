import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieThunk } from './movieThunk'

const initialState = {
    movies: []
};

export const getMovies = createAsyncThunk(
    'cart/getCartItems',
    async (thunkAPI) => {
        return movieThunk()
    }
);

const movieSlice = createSlice({
    name: 'movie', initialState, reducers: {
        test: () => {
            console.log("test")
        }
    } , extraReducers:{
        []
    }
})

export const { test } = movieSlice.actions

export default movieSlice.reducer