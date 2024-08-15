import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "GenreLayout",
};

type Props = { children: React.ReactNode };
const GenreLayout = ({children}: Readonly<Props>) => {
    return (
        <>
            {children}
        </>
    );
};
export default GenreLayout;