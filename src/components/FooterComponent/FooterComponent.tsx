import React from 'react';
import styles from "@/components/Header/HeaderComponent.module.css";
import Link from "next/link";
import ToggleComponent from "@/components/DarkLightComponent/ToggleComponent";
import SearchComponent from "@/components/SearchComponent/SearchComponent";

const FooterComponent = () => {
    return (
        <div>
            <div className="wrapper">
                <ul className={styles.topMenu}>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/movies'}>MoviesPage</Link></li>
                    <li><Link href={'/user'}>User</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterComponent;