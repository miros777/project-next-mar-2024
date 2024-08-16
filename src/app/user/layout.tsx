import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "User Information",
};

type Props = { children: React.ReactNode };
const UserLayout = ({children}: Readonly<Props>) => {
    return (
        <>
            {children}
        </>
    );
};
export default UserLayout;