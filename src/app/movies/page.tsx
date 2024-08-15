
import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import PaginationControls from "@/components/Pagination/PaginationControls";

// type IProps = {
//     searchParams: {
//         page?: string,
//         with_genres?: string }
// }
// /discover/movie?with_genres=${with_genres}&page=${page}

const Page = async ({searchParams}) => {

    const page = searchParams['page'] ?? '1'

    const movies = await servicesMovie.getMovies(page.toString());

    const start = (Number(page) - 1);
    const end = 0;

    return (
        <>
            <h2>Movies All</h2>
            <div className='wrapper'>
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