// ../page/user/HeartPage.js

import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle.js";
import Header from "../../ui/user/Header.js";
import Heart from "../../ui/user/Heart.js";
import Footer from "../../ui/user/Footer.js";

function HeartPage() {

    return (
        <>
            <GlobalStyle/>

            <Header/>
            <Heart/>
            <Footer/>
        </>
    );
}

export default HeartPage;