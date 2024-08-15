import React from 'react';
import MovieInfoComponent from "@/components/MovieInfo/MovieInfoComponent";

const Page = ({params: {id}}) => {

    return (
        <div>
            <h2>Single page Movie</h2>
            <div className="wrapper">
                <MovieInfoComponent key={id} params={id}/>
            </div>
        </div>
    );
};

export default Page;