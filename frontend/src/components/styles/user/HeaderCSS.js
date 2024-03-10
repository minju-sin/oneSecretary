import { styled } from 'styled-components';

// 헤더에 관한 스타일 

export const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
    max-width: 1440px;
    height: 74px;
    background: #fff;
`;

export const StyledHeaderMenu = styled.img`
    width: 22px;
    height: 19px;
    margin: 28px 0px 27px 500px;
`;

export const StyledHeaderInput = styled.input`
    width: 374px;
    height: 37px;
    margin: 18px 0px 18px 20px;
    background: #D9D9D9;
    border: none; 
    border-radius: 10px;
    font-family: "Jalnan";
    font-size: 15px;
`;

export const StyledHeaderHome = styled.img`
    width: 22px;
    height: 19px;
    margin: 28px 494px 27px 20px;
`;