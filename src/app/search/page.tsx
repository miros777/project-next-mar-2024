import React from 'react';
import {servicesMovie} from "@/services/api.services";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";

type IProps = {
    data: string;
}
const Page = async ({searchParams}:IProps) => {

    let data = JSON.parse(searchParams.data);
    // let searchRes = [{title: 'No result', id:900000000}];
    // if (data.length > 0) {
        const searchRes = await servicesMovie.searchByQuery(data);
        console.log("00000000000");
        console.log(searchRes);
        console.log("----------");
    // }

    return (
        <div>

            <h3>Search Page</h3>
            <div className="wrapper">
                {
                    searchRes.map(movie => (
                        <MoviesListCardComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>

            )

        </div>
    );
};

export default Page;