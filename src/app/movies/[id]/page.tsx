import React from 'react';
import MovieInfoComponent from "@/components/MovieInfo/MovieInfoComponent";

const Page =  ({params: {id}}) => {

    return (
        <div>
            <h2>Single page Movie</h2>
            <MovieInfoComponent key={id} params={id}/>
        </div>
    );
};

export default Page;