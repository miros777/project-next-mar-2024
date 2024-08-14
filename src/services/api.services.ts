import {IGenres} from "@/models/IGenres";
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";
import {headers} from "next/headers";
import {IGenre} from "@/models/IGenre";
import {IMovieInfo} from "@/models/IMovieInfo";

const baseUrl = "https://api.themoviedb.org/3";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjM2ZmMzYWJmYTlkYzA2MTRmOTcxYjY2ZDhkOWE5YyIsIm5iZiI6MTcyMzY1MTg5OC40MjU5MjYsInN1YiI6IjY2YjY3ZWU3MjVjOGFhNDg3ZGM1ZjJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yaI_agqnmauPcDUtxWU5pKmF7dkXnAWtU2eHpaV26Lk';
const key = 'ef36fc3abfa9dc0614f971b66d8d9a9c';


const options = {method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token
    }};
let customHeaders = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + token
};

// let posterHeaders = {
//     Accept: 'image/jpeg',
//     Authorization: 'Bearer ' + token
// };
// const optionsPoster = {method: 'GET', headers: posterHeaders};

const servicesGender = {
    getGenre: async (): Promise<IGenre[]> => {
        const response = await fetch(baseUrl + '/genre/movie/list', options)
            .then(response => response.json())
            // .then(response => response)
            .catch(err => console.error(err));
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

    getMovieByID: async (movie_id: number): Promise<IMovieInfo> => {
        const res = await fetch(baseUrl + '/movie/' + movie_id, options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return res;
    },
    searchByQuery: async (word: string): Promise<IMovie[]> => {
        const res = await fetch(baseUrl + '/search/movie?query=' + word, options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return res.results;
    },
};


export {
    servicesGender,
    servicesMovie,

}
