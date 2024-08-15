"use client"
// import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {servicesMovie} from "@/services/api.services";
import {useSearchParams} from "react-router-dom";

export const useParamsCustom = () => {
    let [query] = useSearchParams({page: '1'});
    useEffect(() => {
        let page = query.get('page').toString();
        async function ddd  (){
            let res = await servicesMovie.getMoviesPagination(page);
            return res;
        }

        console.log(ddd())
    }, [query]);
}
