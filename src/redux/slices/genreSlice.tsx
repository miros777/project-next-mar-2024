import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
// import {IPost} from "../../models/IPost";
// import {postServices} from "../../api.services/services";
import {servicesGender} from "@/services/api.services";
import {IGenre} from "@/models/IGenre";

type genreSliceType = {
    genres: IGenre[],
    // genre: IGenre | null,
    error: string,
    // isLoaded: boolean
};

const initState: genreSliceType = {
    genres: [],
    // genre: null,
    error: '',
    // isLoaded: false
};


const loadGenre = createAsyncThunk<any, any, any>('genreSlice\loadGenre', async (_, thinkAPI) => {
    try {
        let genres = await servicesGender.getGenre();
        return thinkAPI.fulfillWithValue(genres);
        // return genres;
    } catch (e) {
        // let error = e as AxiosError;
        return thinkAPI.rejectWithValue(e?.response?.data);
    }
});


export const genreSlice = createSlice<any, any, any>({
    name: "genreSlice",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        return builder
            .addCase(loadGenre.fulfilled, ((state, action) => {
                state.genres = action.payload;
                // state.isLoaded = true;
            }))
            .addMatcher(isRejected(loadGenre), (state, action) => {
                state.error = action.payload as string;
            })

    }
});
export const genreActions = {
    ...genreSlice.actions,
    loadGenre,
}