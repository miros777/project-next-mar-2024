"use client";
import React, {FC, useEffect, useState} from 'react';
import style from "./main.module.css"


const DarkLightComponent:FC = () => {

    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {

    }, [isToggled]);
    const handleChange = () => {
        setIsToggled(!isToggled);
        // document.body.style.backgroundColor = "green";
    };
    const changeColor = () => {
        handleChange();
        document.body.style.backgroundColor = "green";
    }


    return (
        <button onClick={changeColor } className={`style.toggle-button ${isToggled ? 'on' : 'off'}`}
        onChange={(e)=>{}}>
            {isToggled ? 'ON' : 'OFF'}
        </button>
    );
};

export default DarkLightComponent;