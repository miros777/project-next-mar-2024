import React from "react";
import type {Metadata} from "next";
import HeaderComponent from "@/components/Header/HeaderComponent";

export const metadata: Metadata = {
    title: "SearchLayout",
};

type Props = { children: React.ReactNode };
const SearchLayout = ({children}: Readonly<Props>) => {
    return (
        <>
            {/*<HeaderComponent/>*/}
            SearchLayout layout start
            {children}
            SearchLayout layout end
        </>
    );
};
export default SearchLayout;