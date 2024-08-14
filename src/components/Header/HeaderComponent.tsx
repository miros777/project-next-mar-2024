import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li></li>
                <li></li>
                <li></li>
                <li><Link href={'/movies'}>MoviesPage</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;