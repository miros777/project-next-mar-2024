
"use client"

import React from "react";
// import "./styles.css";
import ReactStars from "react-rating-stars-component";
import PosterPreviewComponent from "@/components/PosterPreview/PosterPreviewComponent";
import {number, string} from "prop-types";

// StarsRatingComponent.
// const defaultProps = {
//     size: 30,
//     count: 10,
//     isHalf: true,
//     value: 0,
//     color: "grey",
//     activeColor: "red",
//     onChange: newValue => {
//         console.log(`Example 3: new value is ${newValue}`);
//     }
// };
// Props: Partial<typeof defaultProps>
export default function StarsRatingComponent({average}: number) {
    // useMyHook()
    // let {size, average, striped, className} = { ...defaultProps, ...average};
    // const props = {...defaultProps, ...Props, average};
    // const {size, count, isHalf, value, color, activeColor} = props;
    // console.log(average);

    const thirdExample = {
        size: 30,
        count: 10,
        isHalf: true,
        value: average,
        color: "grey",
        activeColor: "red",
        onChange: newValue => {
            console.log(`Example 3: new value is ${newValue}`);
        }
    };

    return (
        <div className="App">
            <h4>Full stars rating only</h4>
            <ReactStars {...thirdExample} />
        </div>
    );
}

