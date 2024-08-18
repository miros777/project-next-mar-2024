import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

type IProps = {
    searchParams: {
        page?: string,
        with_genres?: string
    }
}

const Page = async ({searchParams}:IProps) => {

    const page = searchParams['page'] ?? '1'
    const movies = await servicesMovie.getMovies(page.toString());

    const start = (Number(page) - 1);
    const end = 0;

    return (
        <>
            <div className='wrapper d-flex j-c-center'>
                <h1>Movies All</h1>
                {
                    movies.results.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>
            <div className='wrapper'>
                <PaginationComponent
                    hasNextPage={end < movies.total_pages}
                    hasPrevPage={start > 0}
                />
            </div>
        </>
    );
};

export default Page;