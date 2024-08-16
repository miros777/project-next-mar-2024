"use client";
import React, {useEffect, useState} from 'react';

const ToggleButton = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active) {
            document.body.style.backgroundColor = "black";
        } else {
            document.body.style.backgroundColor = "#d9d9d9";
        }
    }, [active]);

    return (
        <>
            <button onClick={() => setActive(!active)} type="button">
                <span className="is-block">{active ? "Dark" : "Light"}</span>
            </button>
        </>
    );
}

export default ToggleButton;