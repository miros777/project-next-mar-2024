import axios, {AxiosResponse} from "axios";
import {IGenres} from "@/models/IGenres";
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";

const baseUrl = "https://api.themoviedb.org/3";

const axiosInstans = axios.create({
    baseURL: baseUrl
});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjM2ZmMzYWJmYTlkYzA2MTRmOTcxYjY2ZDhkOWE5YyIsIm5iZiI6MTcyMzI3MTQzNS40ODM5ODQsInN1YiI6IjY2YjY3ZWU3MjVjOGFhNDg3ZGM1ZjJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jHe96US8_pptrulspihPZjrynsX-OSCyas54KUTglsM';

axiosInstans.interceptors.request.use(requestObject => {
        requestObject.headers.set('Authorization', 'Bearer ' + token);
    return requestObject
})

const servicesGender =  {
    getGenre: async ():Promise<IGenres> => {
        let response:AxiosResponse<any> = await axiosInstans.get<IGenres>('/genre/movie/list');
        return response.data;
    }
}

const servicesMovie =  {
    getMovies: async ():Promise<IMovies> => {
        let response:axios.AxiosResponse<IMovies> = await axiosInstans.get('/discover/movie');
        return response.data;
    },
    getMovieByID: async (movie_id:number):Promise<IMovie> => {
        let response:AxiosResponse<IMovie> = await axiosInstans.get('/movie/' + movie_id);
        return response.data;
    }
}

export {
    servicesGender,
    servicesMovie

}
