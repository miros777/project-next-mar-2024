import React, {useState} from 'react';
import {servicesMovie} from "@/services/api.services";
import Link from "next/link";

const SearchComponent = () => {

    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {name};

        const res = await servicesMovie.searchByQuery(data.name.toString());

        if(res){
        setName(res);
            return res;
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
            <Link href={{pathname: "/search/", query: {data: JSON.stringify(name)}}}>Send</Link>
        </form>

    );
};

export default SearchComponent;