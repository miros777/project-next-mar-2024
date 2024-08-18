import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

type IProps = {
    data: string;
}
const Page = async ({searchParams}: IProps) => {
    // const page = searchParams['page'] ?? '1';
    // const start = (Number(page) - 1);
    // const end = 0;
    //

    let dadaParce = JSON.parse(searchParams.data) ;
    const movies = await servicesMovie.searchByQuery(dadaParce);

    return (
        <div className="wrapper">
            <h1>Search Page</h1>
            <div className="wrapper d-flex j-c-center">
                {
                    movies.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>
            {/*<div className='wrapper'>*/}
            {/*    <PaginationComponent*/}
            {/*        hasNextPage={end < movies.length}*/}
            {/*        hasPrevPage={start > 0}*/}
            {/*    />*/}
            {/*</div>*/}

        </div>
    );
};

export default Page;