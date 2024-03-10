// ./controllers/newsController.js

const asyncHandler = require('express-async-handler');
const dbConnect = require('../config/dbConnect');

// 사용자 회원가입 API
// POST /user/signup
const UserSignUp = asyncHandler(async (req, res) => {
    try {
        const { id, password, nickname, phone, birth } = req.body;
        
        // 데이터베이스에 회원 정보 저장
        const db = await dbConnect(); // 이 부분을 async 함수 내부로 이동

        // 데이터베이스에 회원 정보 저장
        const [rows, fields] = await db.query("INSERT INTO user (id, password, nickname, phone, birth) VALUES (?, ?, ?, ?, ?)", [id, password, nickname, phone, birth]);

        res.send('회원가입이 완료되었습니다.');
    } catch (error) {
        console.error('회원가입 오류:', error);
        res.status(500).send('회원가입 중 오류가 발생했습니다.');
    }
});


// 사용자 로그인 API
// POST /user/login
const UserLogin = asyncHandler(async (req, res) => {
    try {
        // 클라이언트로부터 받은 아이디와 비밀번호
        const { id, password } = req.body;

        const db = await dbConnect(); // 이 부분을 async 함수 내부로 이동


        // 아이디를 사용하여 사용자를 데이터베이스에서 찾습니다.
        const user = (await db.query('SELECT * FROM user WHERE id = ?', [id]))[0];

        console.log(user);

        if (!user || user.length === 0) {
            return res.status(401).json({ message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
        }
        
        // 데이터베이스에서 가져온 사용자의 비밀번호와 클라이언트에서 받은 비밀번호를 비교합니다.
        if (user[0].password !== password) {
            return res.status(401).json({ message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
        }

        // 로그인에 성공하면 성공 메시지를 반환합니다.
        return res.status(200).json({ message: '로그인에 성공했습니다.' });
    } catch (error) {
        // 오류가 발생한 경우 오류 메시지를 반환합니다.
        console.error('로그인 오류:', error);
        return res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    }
});

module.exports = {UserSignUp, UserLogin};