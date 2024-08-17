import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";

type IProps = {
    data: string;
}
const Page = async ({searchParams}: IProps) => {

    let data = JSON.parse(searchParams.data);
    const searchRes = await servicesMovie.searchByQuery(data);

    return (
        <div className="wrapper">
            {/*<div className="wrapper">*/}
                <h1>Search Page</h1>
            {/*</div>*/}
            <div className="wrapper">
                {
                    searchRes.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>

        </div>
    );
};

export default Page;