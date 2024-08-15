import React from 'react';
import {servicesMovie} from "@/services/api.services";
import PosterPreviewComponent from "@/components/PosterPreview/PosterPreviewComponent";
import StarsRatingComponent from "@/components/StarsRating/StarsRatingComponent";

const MovieInfoComponent =  async ({params}) => {
    const id_movie = params;
    const movie = await servicesMovie.getMovieByID(id_movie);

    console.log(movie);
    return (
        <div>
            <h2>MovieInfoComponent</h2>
            <PosterPreviewComponent movie_id={movie.id}/>
            <div>{movie.adult}</div>
            {/*<div>backdrop_path: {movie.backdrop_path}</div>*/}
            <h4>{movie.original_title}</h4>
            <div>
                {/*{movie.belongs_to_collection.id}*/}
                {/*{movie.belongs_to_collection.name}*/}
                {/*{movie.belongs_to_collection.poster_path}*/}
                {/*{movie.belongs_to_collection.backdrop_path}*/}
            </div>
            <div>budget {movie.budget}</div>
            {/*<div>{movie.genres}</div>*/}
            <div>homepage {movie.homepage}</div>
            {/*<div>{movie.id}</div>*/}
            <div>{movie.imdb_id}</div>
            <div>{movie.origin_country}</div>
            {/*<div>{movie.original_language}</div>*/}

            <p>{movie.overview}</p>
            <div>popularity {movie.popularity}</div>
            {/*<div>{movie.poster_path}</div>*/}
            {/*<div>{movie.production_companies}</div>*/}
            <div>release_date {movie.release_date}</div>
            <div>revenue {movie.revenue}</div>
            {/*<div>{movie.spoken_languages}</div>*/}
            <div>status {movie.status}</div>
            <div>tagline {movie.tagline}</div>
            {/*<div>{movie.title}</div>*/}
            {/*<div>{movie.video}</div>*/}
            {/*<div>*/}
                <StarsRatingComponent average={movie.vote_average}/>
            {/*</div>*/}
            <div>vote_count {movie.vote_count}</div>
        </div>
    );
};

export default MovieInfoComponent;