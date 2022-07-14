import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    movies: []
};

const movieSlice = createSlice()