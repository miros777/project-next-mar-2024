import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movie Page Info'
}

type Props = { children: React.ReactNode }

const MovieLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieLayout;