import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieThunk } from './movieThunk'

const initialState = {
    movies: []
};

export const getMovies = createAsyncThunk(
    'cart/getCartItems',
    async (name, thunkAPI) => {
        try {
            // console.log(name);
            // console.log(thunkAPI);
            // console.log(thunkAPI.getState());
            // thunkAPI.dispatch(openModal());
            const resp = await axios(url);

            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('something went wrong');
        }
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