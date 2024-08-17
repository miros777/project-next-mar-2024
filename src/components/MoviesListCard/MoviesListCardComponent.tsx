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
            <div className="cardImg">
                <Link href={{
                    pathname: "/movies/" + movie.id,
                    query: {data: JSON.stringify(movie)}
                }}> {getPlaceholder(movie.backdrop_path)}</Link>

                {/* {return object with id of genres and pass to GenreBadgeComponent movie.genre_ids}*/}
                <div className="cardBangWrapper">
                    {movie.genre_ids.map(id => <GenreBadgeComponent id={id}/>)}
                </div>
            </div>

            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>

            <div>popularity {movie.popularity}</div>
            <div>Date release: {movie.release_date}</div>
            <div>vote_count: {movie.vote_count}</div>
            <div><SrarsComponentNew average={movie.vote_average}/></div>
            <div className="cardMore"><Link href={{pathname: "/movies/" + movie.id, query: {data: JSON.stringify(movie)}}}>More
                info...</Link></div>
        </div>
    );
};

export default MoviesListCardComponent;