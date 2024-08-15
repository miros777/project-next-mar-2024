import React, {FC} from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import {useSearchParams} from "react-router-dom";
import {IMovie} from "@/models/IMovie";

type IProps = {
    searchParams: {
        page?: string,
        with_genres?: string }
}
const MoviesPageComponent = async ({searchParams}) => {

    // let page = searchParams.page || '1';

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