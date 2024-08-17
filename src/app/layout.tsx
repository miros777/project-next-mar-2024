import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {ReduxProvider} from "@/redux/provider";
import HeaderComponent from "@/components/Header/HeaderComponent";
import GenreComponent from "@/components/GenreComponent/GenreComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

export const metadata: Metadata = {
    title: "App Movies NEXT_REACT",
    description: "Small app for looking new movies in the World",
};

type TypeRoot = { children: React.ReactNode; };
export default function RootLayout({children,}: Readonly<TypeRoot>) {

    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            <header className="header">
                <HeaderComponent/>
                <GenreComponent/>
            </header>
                {children}
            <footer className="footer">
                <FooterComponent/>
            </footer>
        </ReduxProvider>
        </body>
        </html>
    );
}
