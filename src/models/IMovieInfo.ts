import {IProdCompanie} from "@/models/IProdCompanie";
import {ISkokenLang} from "@/models/ISkokenLang";
import {IGenre} from "@/models/IGenre";
import {IBelongsToColection} from "@/models/IBelongsToColection";
import {IProductionCountries} from "@/models/IProductionCountries";

export interface IMovieInfo {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: IBelongsToColection,
    budget: number,
    genres: IGenre[],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: [ string ],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProdCompanie[],
    production_countries: IProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ISkokenLang[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}