import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {toggleSlice} from "@/redux/slices/toggleSlice";

export const store = configureStore({
    reducer: {
        toggleSliceMy: toggleSlice.reducer,
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();