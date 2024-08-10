import {IMovie} from "@/models/IMovie";

export interface IMovies {
    page: 1,
    results: IMovie[],
    total_pages: number,
}