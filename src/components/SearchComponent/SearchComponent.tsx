import React, {useState} from 'react';
import {servicesMovie} from "@/services/api.services";
import Link from "next/link";

const SearchComponent = () => {

    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {name};
        const response = await servicesMovie.searchByQuery(data.name.toString());

        if(response){
        setName(response);
            return response;
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <input
                id="name"
                type="text"
                onChange={e => setName(e.target.value)}
                placeholder={'any words...'}
            />
            <Link href={{pathname: "/search/", query: {data: JSON.stringify(name), page: '1'}}}>Send</Link>
        </form>

    );
};

export default SearchComponent;