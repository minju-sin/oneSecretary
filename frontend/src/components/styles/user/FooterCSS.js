import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
    max-width: 1440px;
    height: 74px;
    background: #fff;
`;

export const StyledFooterBar = styled.img`
    width: 37px;
    height: 37px;
`;

export const StyledFooterItem = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin: 0 20px;
    text-decoration: none; 
    color: inherit; 
    cursor: pointer;
`;

export const StyledFooterP = styled.p`
    color: #000;
    text-align: center;
    font-family: "Jalnan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    cursor: pointer;
    transition: color 0.1s; 
    
    &:hover {
        color: #D00F31; 
    }
`;