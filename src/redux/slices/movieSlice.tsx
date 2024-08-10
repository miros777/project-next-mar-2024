import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
// import {IPost} from "../../models/IPost";
// import {postServices} from "../../api.services/services";
import {AxiosError} from "axios";
import {IMovie} from "@/models/IMovie";
import {servicesMovie} from "@/services/api.services";
import {IMovies} from "@/models/IMovies";

type movieSliceType = {
    movies: IMovies,
    movie: IMovie | null,
    error: string,
    isLoaded: boolean
}
const initState: movieSliceType = {
    movies: [],
    movie: null,
    error: '',
    isLoaded: false
}
const loadMovies = createAsyncThunk('movieSlice\loadMovies', async (_, thinkAPI) => {
    try{
        let movies = (await servicesMovie.getMovies());
        return thinkAPI.fulfillWithValue(movies);
    }catch (e){
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(error?.response?.data);
    }
});


export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initState,
    reducers: {},
    extraReducers:(builder) => {
        return builder
            .addCase(loadMovies.fulfilled, ((state, action) => {
                state.movie = action.payload;
                state.isLoaded = true;
            }))
            .addMatcher(isRejected(loadMovies), (state, action) => {
                state.error = action.payload as string;
            })

    });
export const postActions = {
    ...movieSlice.actions,
    loadMovies,
}