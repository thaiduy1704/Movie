import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import second from './movieThunk'

const initialState = {
    movies: []
};

const movieSlice = createSlice({
    name: 'movie', initialState, reducers: {
        test: () => {
            console.log("test")
        }
    }
})

export const { test } = movieSlice.actions

export default movieSlice.reducer