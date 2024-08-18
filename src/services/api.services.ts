import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";
import {IGenre} from "@/models/IGenre";
import {IMovieInfo} from "@/models/IMovieInfo";
import {IUser} from "@/models/IUser";

const baseUrl = "https://api.themoviedb.org/3";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjM2ZmMzYWJmYTlkYzA2MTRmOTcxYjY2ZDhkOWE5YyIsIm5iZiI6MTcyMzY1MTg5OC40MjU5MjYsInN1YiI6IjY2YjY3ZWU3MjVjOGFhNDg3ZGM1ZjJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yaI_agqnmauPcDUtxWU5pKmF7dkXnAWtU2eHpaV26Lk';
const key = 'ef36fc3abfa9dc0614f971b66d8d9a9c';

const options = {method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token
    }};

const servicesUser = {
    getUserInfo: async (): Promise<IUser> => {
        const response = await fetch(baseUrl + '/account/21433148', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return response;
    }
};

const servicesMovie = {
    getMovies: async (query:string): Promise<IMovies> => {
        const res = await fetch(baseUrl + '/discover/movie?page=' + query, options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return res;
    },
    getPosterByPath: async (id_movie: number): Promise<any> => {
        const res = await fetch('https://api.themoviedb.org/3/movie/' + id_movie + '/images', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return res.backdrops;
    },

    getMovieByID: async (id_movie: number): Promise<IMovieInfo> => {
        const res = await fetch(baseUrl + '/movie/' + id_movie, options)
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
    getGenre: async ():Promise<IGenre[]> => {
        const response = await fetch(baseUrl + '/genre/movie/list', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return response.genres;
    },
    getMovieByGenre: async (id:string, query:string):Promise<IMovies> => {
        const response = await fetch(baseUrl + '/discover/movie?page=' + query + '&with_genres=' + id, options)
            .then(response => response.json())
            .catch(err => console.error(err));
        return response;
    },
    getMoviePopular: async ():Promise<IMovies> => {
        const response = await fetch(baseUrl + '/discover/tv?sort_by=popularity.acs', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        console.log(response)
        return response;
    }
};

export {
    servicesMovie,
    servicesUser
}
