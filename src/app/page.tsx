import styles from "./page.module.css";
import React from "react";
import DarkLightComponent from "@/components/DarkLightComponent/DarkLightComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";

export default async function Home() {
    // const {genres} = await servicesGender.getGenre();
    // const movies = (await servicesMovie.getMovies());
    // genres;
    // console.log('1111111111');

    return (
        <main className={styles.main}>
            <HeaderComponent/>
            <DarkLightComponent/>

            <h3>
                {/*{genres.map(genre => (*/}
                {/*        <div key={genre.id}>*/}
                {/*            <div>ID: {genre.id}</div>*/}
                {/*            <div>Name:{genre.name}</div>*/}
                {/*            <br/>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*)}*/}
            </h3>


            <h3>Rating component</h3>
            {/*<HoverRating/>*/}

        </main>
    );
}
