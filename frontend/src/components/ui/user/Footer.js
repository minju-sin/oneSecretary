// ../ui/user/Footer.js

import React from "react";
import LocationImage from "../../images/location.svg";
import MyLocationImage from "../../images/myLocation.svg";
import HeartImage from "../../images/heart.svg";
import MyImage from "../../images/profile.svg";
import { StyledFooterBar, StyledFooterItem, StyledFooterP, StyledFooterWrapper } from "../../styles/user/FooterCSS";

function Footer() {

    return (
        <StyledFooterWrapper>
           <StyledFooterItem href="/location">
            <StyledFooterBar src={LocationImage}/>
            <StyledFooterP>지역</StyledFooterP>
           </StyledFooterItem>
           
           <StyledFooterItem href="/mylocation">
            <StyledFooterBar src={MyLocationImage}/>
            <StyledFooterP>내위치</StyledFooterP>
           </StyledFooterItem>

           <StyledFooterItem href="/">
            <StyledFooterP>일1비서</StyledFooterP>
           </StyledFooterItem>

           <StyledFooterItem href="/heart">
            <StyledFooterBar src={HeartImage}/>
            <StyledFooterP>찜</StyledFooterP>
           </StyledFooterItem>

           <StyledFooterItem href="/my">
            <StyledFooterBar src={MyImage}/>
            <StyledFooterP>마이</StyledFooterP>
           </StyledFooterItem>

        </StyledFooterWrapper>
    );
}

export default Footer;