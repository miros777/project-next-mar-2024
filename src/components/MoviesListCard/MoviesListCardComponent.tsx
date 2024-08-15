import React, {createElement, FC} from 'react';
import Link from "next/link";
import {getPlaceholder} from "@/helpers/helpers";
import StarsRatingComponent from "@/components/StarsRating/StarsRatingComponent";
import {IMovie} from "@/models/IMovie";

type myType = {
    children: React.ReactNode;
}
const MoviesListCardComponent = async ({movie}) => {

    return (
            <div className="card">
                {/*<PosterPreviewComponent movie_id={movie.id}/>*/}
                <div>{movie.adult}</div>
                {/*<div>*/}
                <Link href={{
                    pathname: "/movies/" + movie.id,
                    query: {data: JSON.stringify(movie)}
                }}> {getPlaceholder(movie.backdrop_path)}</Link>
                {/*</div>*/}
                <h4>{movie.original_title}</h4>
                <p>{movie.overview}</p>
                <div>{movie.genre_ids}</div>
                <div>popularity {movie.popularity}</div>
                {/*<div>{movie.poster_path}</div>*/}
                <div>Date release: {movie.release_date}</div>
                <div>vote_count: {movie.vote_count}</div>
                <div><StarsRatingComponent average={movie.vote_average}/></div>
                {/*<Link href={"/movies/" + movie.id}>More info...</Link>*/}
                <Link href={{pathname: "/movies/" + movie.id, query: {data: JSON.stringify(movie)}}}>More info...</Link>
            </div>
    );
};

export default MoviesListCardComponent;