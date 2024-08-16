import React from 'react';
import Link from "next/link";
import {getPlaceholder} from "@/helpers/helpers";
import SrarsComponentNew from "@/components/StarsRating/SrarsComponentNew";

type myType = {
    children: React.ReactNode;
}
const MoviesListCardComponent = async ({movie}) => {

    return (
            <div className="card">
                {/*<PosterPreviewComponent movie_id={movie.id}/>*/}
                <div>{movie.adult}</div>
                <Link href={{
                    pathname: "/movies/" + movie.id,
                    query: {data: JSON.stringify(movie)}
                }}> {getPlaceholder(movie.backdrop_path)}</Link>
                <h4>{movie.original_title}</h4>
                <p>{movie.overview}</p>
                <div>{movie.genre_ids}</div>
                <div>popularity {movie.popularity}</div>
                {/*<div>{movie.poster_path}</div>*/}
                <div>Date release: {movie.release_date}</div>
                <div>vote_count: {movie.vote_count}</div>
                <div><SrarsComponentNew average={movie.vote_average}/></div>
                <Link href={{pathname: "/movies/" + movie.id, query: {data: JSON.stringify(movie)}}}>More info...</Link>
            </div>
    );
};

export default MoviesListCardComponent;