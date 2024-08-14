import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {movieSlice} from "@/redux/slices/movieSlice";
import {genreSlice} from "@/redux/slices/genreSlice";

export const store = configureStore({
    reducer: {
        movieStore: movieSlice.reducer,
        genreStore: genreSlice.reducer,
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();