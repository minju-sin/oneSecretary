// ../ui/user/Login.js

import React, { useState } from "react";
import axios from "axios";
import { StyledLoginWrapper, StyledLoginTitle, StyledInput, StyledButton, StyledInputName, StyledError } from "../../styles/user/LoginCSS";

function Login() {
    // useState를 이용한 상태 설정
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // 로그인 버튼 클릭 이벤트 핸들러
    const handleLogin = async () => {
        try {
            // 사용자가 입력한 아이디와 비밀번호를 객체로 만듭니다.
            const userData = { id, password };

            // Axios를 사용하여 POST 요청을 보냅니다.
            const response = await axios.post('/user/login', userData);

            // 응답을 처리하고 성공 메시지를 출력합니다.
            console.log(response.data);

            // 로그인이 성공하면 메인 홈페이지로 이동합니다.
            window.location.href = '/';
        } catch (error) {
            // 오류를 처리하고 오류 메시지를 출력합니다.
            console.error('로그인 오류:', error);
            setLoginError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <>
            <StyledLoginWrapper>
                <StyledLoginTitle>일1비서</StyledLoginTitle>

                <StyledInputName>아이디</StyledInputName>
                <StyledInput placeholder="아이디" onChange={(e) => setId(e.target.value)} />

                <StyledInputName>비밀번호</StyledInputName>
                <StyledInput placeholder="비밀번호" type="password" onChange={(e) => setPassword(e.target.value)} />

                {loginError && <StyledError>{loginError}</StyledError>}

                <StyledButton onClick={handleLogin}>로그인</StyledButton>
            </StyledLoginWrapper>
        </>
    );
}

export default Login;
