import React from 'react';
import {Metadata} from "next";

// export const metadata: Metadata = {
//     title: 'UsersLayout metadata'
// }
//

type Props = { children: React.ReactNode }

const MovieLayout = ({children}: Props) => {
    return (
        <div>

            {children}
            movie layout
        </div>
    );
};

export default MovieLayout;