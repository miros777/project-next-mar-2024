import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
const Page = async () => {
    const movies = await servicesMovie.getMovies();
    console.log(movies);
    return (
        <div>
            <h3>Movies</h3>
            <div className="wrapper">
                {
                    movies.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;