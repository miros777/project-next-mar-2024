"use client"
import React, {createElement} from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const PosterPreviewComponent = ({path}) => {
    return (
        <>
            {/*All posters CODE*/}
            <Splide options={ {
                rewind: true,
                width : 800,
                gap   : '1rem',
            } } className="sliderPosters" aria-label="My Favorite Images">

                {path.map((v,i) => {
                  return  <SplideSlide key={i}>
                        {createElement(
                            "img",
                            {src: "https://image.tmdb.org/t/p/w500" + v.file_path, width: 800},
                        )}
                    </SplideSlide>
                })
                }
            </Splide>
        </>
    )
};

export default PosterPreviewComponent;