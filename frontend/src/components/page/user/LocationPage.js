// ../page/user/LocationPage.js

import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle.js";
import Header from "../../ui/user/Header.js";
import Location from "../../ui/user/Location.js";
import Footer from "../../ui/user/Footer.js";

function LocationPage() {

    return (
        <>
            <GlobalStyle/>

            <Header/>
            <Location/>
            <Footer/>
        </>
    );
}

export default LocationPage;