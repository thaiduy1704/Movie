import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    movies: []
};

const movieSlice = createSlice({name:'movie', initialState, reducers:{
    test: ()=>{
        console.log("test")
    }
}})

export const {test} = movi

export default movieSlice.reducer