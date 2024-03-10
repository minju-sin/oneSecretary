import React, { useState } from "react";
import axios from "axios";
import { StyledSignUpWrapper, StyledLoginTitle, StyledInput, StyledButton, StyledError, StyledInputName } from "../../styles/user/LoginCSS";

function SignUp() {
    
    // useState를 이용한 회원가입 폼 상태 설정
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');

    // 유효성 검사 상태 설정 
    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [birthError, setBirthError] = useState('');

    // 아이디 유효성 검사 함수
    const isValidId = (id) => {
        // 영문자와 숫자로만 이루어져 있는지를 검사하는 정규표현식
        const idRegex = /^[a-zA-Z0-9]+$/;
        
        // 5~10글자 사이인지를 검사하는 조건
        const isLengthValid = id.length >= 5 && id.length <= 10;

        // 정규표현식과 길이 조건 모두를 만족하는지를 반환
        return idRegex.test(id) && isLengthValid;
    };


    // 비밀번호 유효성 검사 함수
    const isValidPassword = (password) => {
        // 8~16자의 영문자, 숫자, 특수문자를 모두 포함하는지를 검사하는 정규표현식
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
        
        // 정규표현식을 통과하는지를 반환
        return passwordRegex.test(password);
    }


    // 전화번호 유효성 검사 함수 
    const isValidPhone = (phone) => {
        // 숫자로만 이루어져 있는지를 검사하는 정규표현식
        const phoneRegex = /[0-9]/g;

        // 전화번호가 11자리인지 확인하는 조건
        const isPhoneLengthValid = phone.length === 11;

        // 정규표현식과 길이 조건을 모두 만족하는지 확인
        return phoneRegex.test(phone) && isPhoneLengthValid;
    };


    // 생년월일 유효성 검사 함수
    const isValidBirth = (birth) => {
        // 숫자로만 이루어져 있는지를 검사하는 정규표현식
        const birthRegex = /[0-9]/g;

        // 생년월일 8자리인지 확인하는 조건
        const isBirthLengthValid = birth.length === 8;

        // 정규표현식과 길이 조건을 모두 만족하는지 확인
        return birthRegex.test(birth) && isBirthLengthValid;
    }

    // 회원가입 버튼 클릭 이벤트 핸들러
    const handleSignUp = async () => {
        try {
            // 사용자가 입력한 데이터를 객체로 만듭니다.
            const userData = { id, password, nickname, phone, birth };
            
            // 아이디의 유효성을 검사합니다.
            if (!isValidId(id)) {
                setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
                return; // 아이디가 유효하지 않으면 회원가입 요청을 보내지 않음
            }

            // 비밀번호의 유효성을 검사합니다.
            if (!isValidPassword(password)) {
                setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
                return; // 비밀번호가 유효하지 않으면 회원가입 요청을 보내지 않음
            }

            // 전화번호의 유효성을 검사합니다.
            if (!isValidPhone(phone)) {
                setPhoneError('전화번호는 11자의 숫자만 입력 가능합니다.');
                return; // 전화번호가 유효하지 않으면 회원가입 요청을 보내지 않음
            }

            // 생년월일의 유효성을 검사합니다.
            if (!isValidBirth(birth)) {
                setBirthError('생년월일은 8자의 숫자만 입력 가능합니다.');
                return; // 생년월일이 유효하지 않으면 회원가입 요청을 보내지 않음
            }

            // Axios를 사용하여 POST 요청을 보냅니다.
            const response = await axios.post('/user/signup', userData);
            
            // 응답을 처리하고 성공 메시지를 출력합니다.
            console.log(response.data);
        } catch (error) {
            // 오류를 처리하고 오류 메시지를 출력합니다.
            console.error('회원가입 오류:', error);
        }
    };

    return (
        <>
            <StyledSignUpWrapper>
                <StyledLoginTitle>일1비서</StyledLoginTitle>
                
                <StyledInputName>아이디*</StyledInputName>
                <StyledInput placeholder="5~10자의 영소문자, 숫자" onChange={(e) => setId(e.target.value)} />
                {idError && <StyledError>{idError}</StyledError>}

                <StyledInputName>비밀번호*</StyledInputName>
                <StyledInput placeholder="8~16자의 영소문자, 숫자, !@*&-_" type="password" onChange={(e) => setPassword(e.target.value)} />
                {passwordError && <StyledError>{passwordError}</StyledError>} 

                <StyledInputName>닉네임*</StyledInputName>
                <StyledInput placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} />


                <StyledInputName>전화번호*</StyledInputName>
                <StyledInput placeholder="ex) 01012345678" onChange={(e) => setPhone(e.target.value)} />
                {phoneError && <StyledError>{phoneError}</StyledError>}

                <StyledInputName>생년월일*</StyledInputName>
                <StyledInput placeholder="ex) 19990101" onChange={(e) => setBirth(e.target.value)} />
                {birthError && <StyledError>{birthError}</StyledError>}

                <StyledButton onClick={handleSignUp}>회원가입</StyledButton>
            </StyledSignUpWrapper>
        </>
    );
}

export default SignUp;
