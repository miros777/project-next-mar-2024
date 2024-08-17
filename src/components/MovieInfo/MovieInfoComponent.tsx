import React from 'react';
import {servicesMovie} from "@/services/api.services";
import SrarsComponentNew from "@/components/StarsRating/SrarsComponentNew";
import GenreBadgeComponent from "@/components/GenreBadge/GenreBadgeComponent";
import Link from "next/link";
import Slider from "@/components/slider/Slider";
import PosterPreviewComponent from "@/components/PosterPreview/PosterPreviewComponent";

const MovieInfoComponent =  async ({params}:JSON) => {
    // const id_movie = JSON.parse(params);
    const id_movie =params;

    const movie = await servicesMovie.getMovieByID(id_movie);
    const path = await servicesMovie.getPosterByPath(movie.id);
    return (
        <div className="wrapper flexColumn">
            <h1>{movie.original_title}</h1>
            <PosterPreviewComponent path={path}/>
            <div className="infoCardText">
                <div className="textMovie">
                    <h3>About movie</h3>
                    <p>{movie.overview}</p>
                </div>
                <div>budget: {movie.budget}</div>
                <div className="wrapper">
                    {
                        movie.genres.map(genre => <GenreBadgeComponent key={genre.id} id={genre.id}/>)
                    }
                </div>
                <div><Link href={movie.homepage}>Go to homepage</Link></div>
                <div>origin_country: {movie.origin_country}</div>
                <div>original_language: {movie.original_language}</div>
                <div>popularity: {movie.popularity}</div>
                <div>release_date: {movie.release_date}</div>
                <div>revenue: {movie.revenue}</div>
                <div>status: {movie.status}</div>
                <div>tagline: {movie.tagline}</div>
                <div>vote_count: {movie.vote_count}</div>
                <div><SrarsComponentNew average={movie.vote_average}/></div>
            </div>

        </div>
    );
};

export default MovieInfoComponent;