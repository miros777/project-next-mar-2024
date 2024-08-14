import React, {createElement} from 'react';
import {servicesMovie} from "@/services/api.services";
const PosterPreviewComponent = async ({movie_id}) => {
    const path = await servicesMovie.getPosterByPath(movie_id);
    // console.log(path.file_path);
    console.log(path);
    return (
        <div>
            {/*{*/}
            {/*    createElement("img",*/}
            {/*            {src: "https://image.tmdb.org/t/p/w500" + path.file_path, width: 200})*/}
            {/*}*/}

            {/*All posters CODE*/}
            {path.map((v)=>{

                    const imgUrl = createElement("img",
                        {src: "https://image.tmdb.org/t/p/w500" + v.file_path,
                        width: 100}
                    );

                  return imgUrl;
            }
            )}
        </div>
    );
};

export default PosterPreviewComponent;