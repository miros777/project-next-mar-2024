import React, {createElement} from 'react';
import Link from "next/link";
import {getPlaceholder} from "@/helpers/helpers";

type myType = {
    children: React.ReactNode;
}
const MoviesListCardComponent = async ({movie}) => {

    return (
        <div style={{width: '33%'}}>
                {/*<PosterPreviewComponent movie_id={movie.id}/>*/}
                <div>{movie.adult}</div>
                <div>
                    {getPlaceholder(movie.backdrop_path)}
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
                    {/*<StarsRatingComponent average={movie.vote_average}/>*/}
                    vote_average: {movie.vote_average}</div>
            {/*<Link href={"/movies/" + movie.id}>More info...</Link>*/}
            <Link href={{pathname: "/movies/" + movie.id, query: {data: JSON.stringify(movie)}}}>More info...</Link>
                <br/>
        </div>
    );
};

export default MoviesListCardComponent;