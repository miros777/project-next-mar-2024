"use client";
import styles from "./stars-component-new.module.css";
import {FC, useState} from "react";

type IProps = {
    count:number,
    average:number,
    icon:string,
    color: string,
    iconSize: string
}

const SrarsComponentNew:FC<IProps> = ({ count, average, icon, color, iconSize }) =>{
    const DEFAULT_COUNT = 10;
    const DEFAULT_ICON = "★";
    const DEFAULT_UNSELECTED_COLOR = "grey";
    const DEFAULT_COLOR = "yellow";

    const [rating, setRating] = useState(average);
    const [temporaryRating, setTemporaryRating] = useState(0);

    let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

    const handleClick = (rating) => {
        setRating(rating);
        localStorage.setItem("starRating", rating);
    };

    return (
        <div className={styles.starsContainer}>
            {stars.map((item, index) => {
                const isActiveColor =
                    (rating || temporaryRating) &&
                    (index < rating || index < temporaryRating);

                let elementColor = "";

                if (isActiveColor) {
                    elementColor = color || DEFAULT_COLOR;
                } else {
                    elementColor = DEFAULT_UNSELECTED_COLOR;
                }

                return (
                    <div
                        className={styles.star}
                        key={index}
                        style={{
                            fontSize: iconSize ? `${iconSize}px` : "28px",
                            color: elementColor,
                            filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
                        }}
                        onMouseEnter={() => setTemporaryRating(index + 1)}
                        onMouseLeave={() => setTemporaryRating(0)}
                        onClick={() => handleClick(index + 1)}
                    >
                        {icon ? icon : DEFAULT_ICON}
                    </div>
                );
            })}
        </div>
    );
}

export default SrarsComponentNew;