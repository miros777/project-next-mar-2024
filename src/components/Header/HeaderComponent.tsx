"use client";
import React from 'react';
import Link from "next/link";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import styles from './HeaderComponent.module.css';
import ToggleComponent from "@/components/DarkLightComponent/ToggleComponent";

const HeaderComponent = () => {
    return (
        <div>
            <div className="wrapper">
                <ul className={styles.topMenu}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><ToggleComponent/></li>
                    <li><Link href={'/movies'}>MoviesPage</Link></li>
                    <li><Link href={'/user'}>User</Link></li>
                </ul>
            </div>
            <div className="wrapper">
                <SearchComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;