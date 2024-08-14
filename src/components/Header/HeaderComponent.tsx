"use client";
import React, {FormEvent} from 'react';
import Link from "next/link";
import {servicesMovie} from "@/services/api.services";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import {useRouter} from "next/router";

const HeaderComponent = () => {

    // const { query } = useRouter();

    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li>
                    <SearchComponent/>
                </li>
                <li></li>
                <li></li>
                <li><Link href={'/movies'}>MoviesPage</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;