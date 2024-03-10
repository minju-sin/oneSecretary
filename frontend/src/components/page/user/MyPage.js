// ../page/user/MyPage.js

import React from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Header from "../../ui/user/Header";
import Profile from "../../ui/user/Profile.js";
import Footer from "../../ui/user/Footer";

function MyPage() {

    return (
        <>
            <GlobalStyle/>

            <Header/>
            <Profile/>
            <Footer/>
        </>
    );
}

export default MyPage;