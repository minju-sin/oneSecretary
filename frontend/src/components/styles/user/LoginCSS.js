// ../../styles/user/Login.js
import styled from "styled-components";

// 로그인 및 회원가입 스타일

export const StyledLoginWrapper = styled.div`
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background: #fff;
    margin: 0 auto;
    margin-top: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const StyledSignUpWrapper = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 10px;
    background: #fff;
    margin: 0 auto;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const StyledLoginTitle = styled.p`
    color: #000;
    text-align: center;
    font-family: "Jalnan";
    font-size: 35px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
`;

export const StyledInput = styled.input`
    width: 100%;
    max-width: 350px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
`;

export const StyledInputName = styled.p`
    color: #0056b3;
    font-family: "Jalnan";
    font-size: 10px;
    margin: 0 auto;
    margin-left : 15px;
    width: 100%;
`;

export const StyledError = styled.p`
    color: red;
    font-family: "Jalnan";
    font-size: 10px;
    margin: 0 auto;
    margin-left : 11px;
    width: 100%;
    padding-bottom: 5px;
`;

export const StyledButton = styled.button`
    width: 100%;
    max-width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-family: "Jalnan";
    font-size: 16px;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
