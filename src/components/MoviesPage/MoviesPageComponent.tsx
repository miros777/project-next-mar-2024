import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";

type IProps = {
    searchParams: {
        page?: string,
        with_genres?: string }
}
const MoviesPageComponent = async ({searchParams}) => {

    const movies = await servicesMovie.getMovies(searchParams.page);

    return (
        <>
            {
                movies.results.map(movie => (
                    <MoviesListCardComponent key={movie.id} movie={movie}/>
                ))
            }
        </>
    );
};

export default MoviesPageComponent;