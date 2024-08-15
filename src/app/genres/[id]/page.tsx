import React from 'react';
import MovieInfoComponent from "@/components/MovieInfo/MovieInfoComponent";
import {getMovieByGenre} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";

const Page = async ({params: {id}}) => {

    let movies = await getMovieByGenre(id);
    console.log(movies);
    // console.log(id.toString());
    // console.log(id);
    console.log(id);

    return (
        <div>

            <div className="wrapper">
                <h2>
                    Genre name GET url
                </h2>
                {
                    movies.results.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>

        </div>
    );
};

export default Page;