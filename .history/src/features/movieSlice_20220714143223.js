import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieThunk } from './movieThunk'

const initialState = {
    movies: [],
    loading: false
};

export const getMovies = createAsyncThunk(
    'movie/getMoviesItem',
    async () => {
        return movieThunk()
    }
);

const movieSlice = createSlice({
    name: 'movie', initialState, reducers: {
        test: () => {
            console.log("test")
        },
        setM
    }, extraReducers: {
        [getMovies.pending]: (state) => {
            state.loading = true
        },
        [getMovies.fulfilled]: (state, { payload }) => {
            state.movies = payload
            state.loading = false
        },
        [getMovies.rejected]: (state) => {
            state.loading = false
        },
    }
})

export const { test } = movieSlice.actions

export default movieSlice.reducer