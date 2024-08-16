import React, {FC} from 'react';
import {getMovieByGenre} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

type IProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const Page = async ({params: {id}, searchParams }:IProps) => {

    const page = searchParams['page'] ?? '1';
    const start = (Number(page) - 1);
    const end = 0;

    let movies = await getMovieByGenre(id);

    return (
        <div>

            <div className="wrapper">
                <h2>
                    Genre name GET url
                </h2>
            </div>
            <div className="wrapper">
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

        </div>
    );
}
;

export default Page;