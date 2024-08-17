import {createElement} from "react";
import {auto} from "@popperjs/core";

export const getPlaceholder = (path) => {
    if(path == null){
        return   createElement("img",
            {src: "https://placehold.jp/3d4070/ffffff/400x200.png"})
    }else{
        return  createElement("img",
            {src: "https://image.tmdb.org/t/p/w500" + path})
    }
}