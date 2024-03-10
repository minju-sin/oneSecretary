// ../page/user/MyLocationPage.js

import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle.js";
import Header from "../../ui/user/Header.js";
import MyLocation from "../../ui/user/MyLocation.js";
import Footer from "../../ui/user/Footer.js";

function MyLocationPage() {

    return (
        <>
            <GlobalStyle/>

            <Header/>
            <MyLocation/>
            <Footer/>
        </>
    );
}

export default MyLocationPage;