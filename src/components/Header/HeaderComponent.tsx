"use client";
import React from 'react';
import Link from "next/link";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import styles from './HeaderComponent.module.css';
const HeaderComponent = () => {
    return (

        <div>
            <ul className={styles.topMenu}>
                <li><Link href={'/'}>Home</Link></li>
                <li><SearchComponent/></li>
                <li></li>
                <li><Link href={'/movies'}>MoviesPage</Link></li>
                <li><Link href={'/user'}>User</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;