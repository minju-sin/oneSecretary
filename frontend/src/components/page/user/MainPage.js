// ../page/user/MainPage.js

import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../../ui/user/Header";
import Category from "../../ui/user/Category.js";
import Footer from "../../ui/user/Footer";

function MainPage() {

    return (
        <>
        <GlobalStyle/>

            <Header/>

            <Category/>

            <Footer/>
        </>
    );
}

export default MainPage;