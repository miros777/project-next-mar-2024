import PaginationControls from "@/components/Pagination/PaginationControls";
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import React, {FC} from "react";
import MoviesPageComponent from "@/components/MoviesPage/MoviesPageComponent";

// type IProps = {
//     searchParams: {
//         page: string
//     }
// }

// export default async function Home({searchParams,}: { searchParams: { [key: string]: string | string[] | undefined } }) {
 const Home = async ({searchParams}) => {
    const page = searchParams['page'] ?? '1'

    const movies = await servicesMovie.getMovies(page.toString());

    const start = (Number(page) - 1);
    const end = 0;

    return (
        <>
            <div className='wrapper'>
                {
                    movies.results.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>
            <div className='wrapper'>
                <PaginationControls
                hasNextPage={end < movies.total_pages}
                hasPrevPage={start > 0}
            />
            </div>
        </>
    )
}
export default Home;