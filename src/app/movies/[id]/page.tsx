import React, {FC} from 'react';
import MovieInfoComponent from "@/components/MovieInfo/MovieInfoComponent";

type IProps = {
    params: { id: string }
}
const Page:FC<IProps> = ({params: {id}}:IProps) => {

    return (
        <div>
            <h2>Single page Movie</h2>
            <div className="wrapper">
                <MovieInfoComponent key={id} params={id}/>
            </div>
        </div>
    );
};

export default Page;