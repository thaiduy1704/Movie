import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieThunk } from './movieThunk'

const initialState = {
    movies: []
};

export const getMovies = createAsyncThunk(
    'cart/getCartItems',
    async (name, thunkAPI) => {
        
    }
);

const movieSlice = createSlice({
    name: 'movie', initialState, reducers: {
        test: () => {
            console.log("test")
        }
    }
})

export const { test } = movieSlice.actions

export default movieSlice.reducer