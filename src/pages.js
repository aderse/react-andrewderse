import React from "react";
import { Header, Footer } from "./pages/sitewide";
import { HomeMain } from "./pages/home";
import { ResumeMain } from "./pages/resume";
import { LinksMain } from "./pages/links";
import { ConnectMain } from "./pages/connect";

export function Home() {
    return (
        <div>
            <Header />
            <HomeMain />  
            <Footer />
        </div>
    );
}

export function Resume() {
    return (
        <div>
            <Header />
            <ResumeMain />
            <Footer />
        </div>
    );
}

export function Links() {
    return (
        <div>
            <Header />
            <LinksMain />
            <Footer />
        </div>
    );
}

export function Connect() {
    return (
        <div>
            <Header />
            <ConnectMain />
            <Footer />
        </div>
    );
}