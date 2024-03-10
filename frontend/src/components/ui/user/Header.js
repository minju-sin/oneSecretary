// ../ui/user/Header.js

import React from "react";
import MenuImage from "../../images/menu.svg"
import HomeImage from "../../images/home.svg"
import { StyledHeaderHome, StyledHeaderInput, StyledHeaderMenu, StyledHeaderWrapper } from "../../styles/user/HeaderCSS";

function Header() {

    return (
        <StyledHeaderWrapper>
            <StyledHeaderMenu src={MenuImage}/>
            <StyledHeaderInput placeholder="검색어를 입력하세요"/>
            <StyledHeaderHome src={HomeImage}/>
        </StyledHeaderWrapper>
    );
}

export default Header;
