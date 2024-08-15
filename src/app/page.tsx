import styles from "./page.module.css";
import React from "react";
import DarkLightComponent from "@/components/DarkLightComponent/DarkLightComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import Head from "next/head";
import StarsRatingComponent from "@/components/StarsRating/StarsRatingComponent";


export default async function Home() {
    // const {genres} = await servicesGender.getGenre();
    // const movies = (await servicesMovie.getMovies());
    // genres;
    // console.log('1111111111');

    return (

        <main className={styles.main}>
            <HeaderComponent/>
            <DarkLightComponent/>

            <h3>Rating component</h3>
            {/*<HoverRating/>*/}


        </main>
    );
}
