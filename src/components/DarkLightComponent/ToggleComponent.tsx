"use client";
import React from 'react';
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {changeColor} from "@/redux/slices/toggleSlice";


const ToggleButton = () => {

    let {isActive} = useAppSelector(state => state.toggleSliceMy);
    let dispatch = useAppDispatch();
    return (
        <>
            <button className="toggle-button" type="button" onClick={() => {
                dispatch(changeColor(!isActive))
            }
            }><span>{isActive ? "Light" : "Dark"}</span></button>
        </>
    );
}

export default ToggleButton;