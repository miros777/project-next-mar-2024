import React from "react";
import type {Metadata} from "next";
import HeaderComponent from "@/components/Header/HeaderComponent";

export const metadata: Metadata = {
    title: "Movies Layout",
};

type Props = { children: React.ReactNode };
const MoviesLayout = ({children}: Readonly<Props>) => {
    return (
        <>
            {children}
        </>
    );
};
export default MoviesLayout;