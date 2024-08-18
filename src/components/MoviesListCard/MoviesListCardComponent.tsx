import React, {createElement} from 'react';
import Link from "next/link";
import {getPlaceholder} from "@/helpers/helpers";
import SrarsComponentNew from "@/components/StarsRating/SrarsComponentNew";
import {IMovie} from "@/models/IMovie";
import GenreBadgeComponent from "@/components/GenreBadge/GenreBadgeComponent";

type IProps = {
    movie: IMovie
}
const MoviesListCardComponent = async ({movie}: IProps) => {

    return (
        <div className="card">
            <div>{movie.adult}</div>
            <div className="cardImg">
                <Link href={{
                    pathname: "/movies/" + movie.id,
                    query: {data: JSON.stringify(movie)}
                }}> {getPlaceholder(movie.poster_path)}</Link>

                {/* {return object with id of genres and pass to GenreBadgeComponent movie.genre_ids}*/}
                <div className="cardBangWrapper">
                    {movie.genre_ids.map(id => <GenreBadgeComponent key={id} id={id}/>)}
                </div>
            </div>

            <h2>{movie.original_title}</h2>
            <p>{movie.overview}</p>

            <div className="cardInfo">
                <div><span>popularity:</span> <span>{movie.popularity}</span></div>
                <div><span>Date release:</span> <span>{movie.release_date}</span></div>
                <div><span>vote_count:</span> <span>{movie.vote_count}</span></div>
                <div><SrarsComponentNew average={movie.vote_average}/></div>
                <div className="cardMore"><Link
                    href={{pathname: "/movies/" + movie.id, query: {data: JSON.stringify(movie)}}}>More
                    info...</Link></div>
            </div>

        </div>
    );
};

export default MoviesListCardComponent;