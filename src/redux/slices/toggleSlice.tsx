import {createSlice} from "@reduxjs/toolkit";

type goggleSliceType = {
    isActive: boolean,
};

const initState: goggleSliceType = {
    isActive: false,
};
export const toggleSlice = createSlice({
    name: "movieSlice",
    initialState: initState,
    reducers: {

        changeColor: (state) => {
            if(state.isActive === true){
                state.isActive = false;
                document.body.classList.remove("isActive");
            }else {
                state.isActive = true;
                document.body.classList.add("isActive");
            }
        }
    },
});

export const {
    changeColor,
} = toggleSlice.actions;