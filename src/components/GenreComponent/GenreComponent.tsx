import React from 'react';
import Link from "next/link";
import {getGenre} from "@/services/api.services";

const GenreComponent = async () => {
    let genre = await getGenre();

    return (
        <div className="wrapper">
            {
                genre.map(v => (
                        <div key={v.id}>
                            <Link className="genreLink" href={{pathname: "/genres/" + v.id}}>{v.name}</Link>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default GenreComponent;