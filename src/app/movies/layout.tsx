import React from "react";
import type {Metadata} from "next";
import HeaderComponent from "@/components/Header/HeaderComponent";

export const metadata: Metadata = {
    title: "MoviesLayout",
};

type Props = { children: React.ReactNode };
const MoviesLayout = ({children}: Readonly<Props>) => {
    return (
        <>
            {/*<HeaderComponent/>*/}
            Movies layout start
            {children}
            Movies layout end
        </>
    );
};
export default MoviesLayout;