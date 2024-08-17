import React from 'react';
import Link from "next/link";
import {getPlaceholder} from "@/helpers/helpers";
import SrarsComponentNew from "@/components/StarsRating/SrarsComponentNew";
import {IMovie} from "@/models/IMovie";
import GenreBadgeComponent from "@/components/GenreBadge/GenreBadgeComponent";

type myType = {
    children: React.ReactNode;
}
const MoviesListCardComponent = async ({movie}: IMovie) => {

    return (
        <div className="card">
            <div>{movie.adult}</div>
            <Link href={{
                pathname: "/movies/" + movie.id,
                query: {data: JSON.stringify(movie)}
            }}> {getPlaceholder(movie.backdrop_path)}</Link>
            <h4>{movie.original_title}</h4>
            <p>{movie.overview}</p>
            <div>genre_ids {typeof movie.genre_ids}jjjj</div>
            {/* {return object with id of genres and pass to GenreBadgeComponent movie.genre_ids}*/}
            {
                movie.genre_ids.map(id => <GenreBadgeComponent id={id}/>)
            }
            <div>popularity {movie.popularity}</div>
            <div>Date release: {movie.release_date}</div>
            <div>vote_count: {movie.vote_count}</div>
            <div><SrarsComponentNew average={movie.vote_average}/></div>
            <Link href={{pathname: "/movies/" + movie.id, query: {data: JSON.stringify(movie)}}}>More info...</Link>
        </div>
    );
};

export default MoviesListCardComponent;