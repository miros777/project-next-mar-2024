import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MovieInfoComponent from "@/components/MovieInfo/MovieInfoComponent";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";

const Page = async ({searchParams}: any) => {
    let data = JSON.parse(searchParams.data);
    // console.log(data);

    const res = await servicesMovie.searchByQuery(data);
    console.log("00000000000");
    console.log(res);
    console.log("----------");
    return (
        <div>

            <h3>Search Page</h3>
            <div className="wrapper">
                {
                    res.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>

            )

        </div>
    );
};

export default Page;