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
                    <h2>About movie</h2>
                    <p>{movie.overview}</p>
                </div>
                <div className="wrapperGenre">
                    {
                        movie.genres.map(genre => <GenreBadgeComponent key={genre.id} id={genre.id}/>)
                    }
                </div>
                <div className="infoTextWrapper">
                    <div className="linkHome"><Link href={movie.homepage ?? '#'}>Original homepage</Link></div>
                    <div><span>budget:</span> <span>{movie.budget}</span></div>
                    <div><span>origin_country:</span> <span>{movie.origin_country}</span></div>
                    <div><span>original_language:</span> <span>{movie.original_language}</span></div>
                    <div><span>popularity:</span> <span>{movie.popularity}</span></div>
                    <div><span>release_date:</span> <span>{movie.release_date}</span></div>
                    <div><span>revenue:</span> <span>{movie.revenue}</span></div>
                    <div><span>status:</span> <span>{movie.status}</span></div>
                    <div><span>tagline:</span> <span>{movie.tagline}</span></div>
                    <div><span>vote_count:</span> <span>{movie.vote_count}</span></div>
                    <div><SrarsComponentNew average={movie.vote_average}/></div>
                </div>

            </div>

        </div>
    );
};

export default MovieInfoComponent;