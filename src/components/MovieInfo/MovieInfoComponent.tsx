import React from 'react';
import {servicesMovie} from "@/services/api.services";

const MovieInfoComponent =  async ({params}) => {
    const id_movie = params;
    const movie = await servicesMovie.getMovieByID(id_movie);

    console.log(movie);
    return (
        <div>
            <h3>MovieInfoComponent</h3>
            <div>{movie.adult}</div>
            <div>backdrop_path: {movie.backdrop_path}</div>
            <div>
                {movie.belongs_to_collection.id}
                {movie.belongs_to_collection.name}
                {movie.belongs_to_collection.poster_path}
                {movie.belongs_to_collection.backdrop_path}
            </div>
            <div>{movie.budget}</div>
            {/*<div>{movie.genres}</div>*/}
            <div>{movie.homepage}</div>
            <div>{movie.id}</div>
            <div>{movie.imdb_id}</div>
            <div>{movie.origin_country}</div>
            <div>{movie.original_language}</div>
            <div>{movie.original_title}</div>
            <div>{movie.overview}</div>
            <div>{movie.popularity}</div>
            <div>{movie.poster_path}</div>
            {/*<div>{movie.production_companies}</div>*/}
            <div>{movie.release_date}</div>
            <div>{movie.revenue}</div>
            {/*<div>{movie.spoken_languages}</div>*/}
            <div>{movie.status}</div>
            <div>{movie.tagline}</div>
            <div>{movie.title}</div>
            <div>{movie.video}</div>
            <div>{movie.vote_average}</div>
            <div>{movie.vote_count}</div>



        </div>
    );
};

export default MovieInfoComponent;