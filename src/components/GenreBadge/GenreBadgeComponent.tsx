import React from 'react';
import {servicesMovie} from "@/services/api.services";
import Link from "next/link";

const GenreBadgeComponent = async ({id}) => {

        let genre = await servicesMovie.getGenre();

        const getGenreWithMovie = genre.map(v => {
                if (id == v.id.toString()) {
                    return <div key={v.id}>
                        <Link  className="genreLink" href={{pathname: "/genres/" + v.id}}>{v.name}</Link>
                    </div>
                }
            }
        )

        return (
                <div className="cardBanges">
                    {getGenreWithMovie}
                </div>
        );
    }
;

export default GenreBadgeComponent;