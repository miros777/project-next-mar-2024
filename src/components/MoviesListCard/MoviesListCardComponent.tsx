import React, {createElement} from 'react';
import PosterPreviewComponent from "@/components/PosterPreview/PosterPreviewComponent";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WATER_IMAGE from "*.png";
import StarsRatingComponent from "@/components/StarsRating/StarsRatingComponent";

const MoviesListCardComponent = async ({movie}) => {
    return (
        <div style={{width: '33%'}}>
                {/*<PosterPreviewComponent movie_id={movie.id}/>*/}
                <div>{movie.adult}</div>
                <div>
                        {
                                createElement("img",
                                    {src: "https://image.tmdb.org/t/p/w500" + movie.backdrop_path, width: 200})
                        }
                </div>
                {/*<div>{movie.title}</div>*/}
                <div>{movie.original_title}</div>
                <div>{movie.overview}</div>

                <div>{movie.genre_ids}</div>
                {/*<div>{movie.id}</div>*/}
                {/*<div>{movie.original_language}</div>*/}

                <div>{movie.popularity}</div>
                {/*<div>{movie.poster_path}</div>*/}
                <div>release_date: {movie.release_date}</div>

                <div>video: {movie.video}</div>
                <div>vote_count: {movie.vote_count}</div>
                <div>
                    <StarsRatingComponent average={movie.vote_average}/>
                    vote_average: {movie.vote_average}</div>
                <br/>
        </div>
    );
};

export default MoviesListCardComponent;