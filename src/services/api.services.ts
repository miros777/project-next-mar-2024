import axios, {AxiosResponse} from "axios";
import {IGenres} from "@/models/IGenres";
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";
import {headers} from "next/headers";
import {IGenre} from "@/models/IGenre";

const baseUrl = "https://api.themoviedb.org/3";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjM2ZmMzYWJmYTlkYzA2MTRmOTcxYjY2ZDhkOWE5YyIsIm5iZiI6MTcyMzI3MTQzNS40ODM5ODQsInN1YiI6IjY2YjY3ZWU3MjVjOGFhNDg3ZGM1ZjJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jHe96US8_pptrulspihPZjrynsX-OSCyas54KUTglsM';

let customHeaders = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + token
};
const options = {method: 'GET', headers: customHeaders};

let posterHeaders = {
    Accept: 'image/jpeg',
    Authorization: 'Bearer ' + token
};
const optionsPoster = {method: 'GET', headers: posterHeaders};

const servicesGender = {
    getGenre: async (): Promise<IGenre[]> => {
        const response = await fetch(baseUrl + '/genre/movie/list', options)
            .then(response => response.json())
            // .then(response => response)
            .catch(err => console.error(err));
        // console.log(response);
//
        return response.genres;
    }
};

// async function getGenre ():Promise<IGenres> {
//     const response = await fetch(baseUrl + '/genre/movie/list', options)
//         .then(response => response.json())
//         .then(response => response)
//         .catch(err => console.error(err));
//     console.log(response);
//
//     return response;
// }

const servicesMovie = {
    getMovies: async (): Promise<IMovie[]> => {
        const res = await fetch(baseUrl + '/discover/movie', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return res.results;
    },
    getPosterByPath: async (id_movie: number): Promise<any> => {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + id_movie + '/images', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return res.backdrops;
    },

    // getMovieByID: async (movie_id: number): Promise<IMovie> => {
    //     let response: AxiosResponse<IMovie> = await axiosInstans.get('/movie/' + movie_id);
    //     return response.data;
    // }
};


export {
    servicesGender,
    servicesMovie,

}
