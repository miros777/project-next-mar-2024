import styles from "./page.module.css";
import React from "react";
import HoverRating from "@/components/StarsRating/StarsRatingComponent";
import {servicesGender, servicesMovie} from "@/services/api.services";

export default async function Home() {
    const {genres} = await servicesGender.getGenre();
    const movies = await servicesMovie.getMovies();

    return (
        <main className={styles.main}>
            <h3>
                {genres.map(genre => (
                        <div key={genre.id}>
                            <div>ID: {genre.id}</div>
                            <div>Name:{genre.name}</div>
                            <br/>
                        </div>
                    )
                )}
            </h3>

            <h3>Movies</h3>
            {
                movies.results.map(movie => (
                    <div key={movie.id}>
                        <div>{movie.genre_ids}</div>
                        <div>{movie.title}</div>
                        <br/>
                    </div>
                ))
            }

            <h3>Rating component</h3>
            <HoverRating/>

        </main>
    );
}
