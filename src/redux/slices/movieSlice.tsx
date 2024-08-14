import {createAsyncThunk, createSlice, isRejected, PayloadAction} from "@reduxjs/toolkit";
// import {IPost} from "../../models/IPost";
// import {postServices} from "../../api.services/services";
import {AxiosError} from "axios";
import {IMovie} from "@/models/IMovie";
import {servicesMovie} from "@/services/api.services";
import {IMovies} from "@/models/IMovies";
import {any} from "prop-types";

type movieSliceType = {
    movies: IMovie[],
    error: string
};

const initState: movieSliceType = {
    movies: [],
    // movie: null,
    error: '',
    // isLoaded: false
};
const loadMovies = createAsyncThunk<IMovie[]>('movieSlice\loadMovies', async (_, thinkAPI) => {
    try {
        let movies = await servicesMovie.getMovies();
        // let movies = moviesAll;
        return thinkAPI.fulfillWithValue(movies);
        // return movies;

    } catch (e) {
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(e?.response?.data);
    }
});


export const movieSlice = createSlice({
    name: "movieSliceuu",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        return builder
            .addCase(loadMovies.fulfilled, ((state, action) => {
                state.movies = [...state].push(action.payload);
                // {return [...state].push(action.payload)}
                // state.isLoaded = true;
            }))

            // .addMatcher(isRejected(loadMovies), (state, action) => {
            //     state.error = action.payload as string;
            // })
    }

});
export const postActions = {
    ...movieSlice.actions,
    loadMovies,
}