import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Search Layout",
};

type Props = { children: React.ReactNode };
const SearchLayout = ({children}: Readonly<Props>) => {
    return (
        <>
            {children}
        </>
    );
};
export default SearchLayout;