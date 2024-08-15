import styles from "./page.module.css";
import React from "react";
import DarkLightComponent from "@/components/DarkLightComponent/DarkLightComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import {getGenre} from "@/services/api.services";
import Link from "next/link";
import MoviesListCardComponent from "@/components/MoviesListCard/MoviesListCardComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

const Home = async () => {

    let genre = await getGenre();

    return (
        <>
            <div className='wrapper'>
                <h2>Genre</h2>
                {
                    genre.map(v => (
                        <div key={v.id}>
                                <Link href={{pathname: "/genres/" + v.id, query: {id: JSON.stringify(v.id)}}}>{v.name}</Link>
                            </div>
                        )
                    )

                }
            </div>

        </>
    );
};

export default Home;
