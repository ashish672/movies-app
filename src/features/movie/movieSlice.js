import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios'

    const initialState = {
        loading : false,
        movies : [],
        error : ''
    }

export const fetchMovies = createAsyncThunk('movies/fetchMovies' , () => {
    return axios.get('http://localhost:3000/movies').then(res => {
        return res.data 
    })
})

const movieSlice = createSlice({
    name : 'movie', 
    initialState,
    extraReducers : builder => {

        builder.addCase(fetchMovies.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(fetchMovies.fulfilled , (state,action) => {
            state.loading = false;
            state.movies = action.payload;
            state.error = '';
        })
        builder.addCase(fetchMovies.rejected , (state,action) => {
            state.loading = false;
            state.movies = [];
            state.error = action.error.message;
        })
    }
})


export default movieSlice.reducer;
// export const {getMovies}  = movieAction.act 