import {IMovie} from "@/models/IMovie";

export interface IList {
    created_by: string,
    description:  string,
    favorite_count: number,
    id: number,
    iso_639_1: string,
    item_count: number,
    items: IMovie[]
}