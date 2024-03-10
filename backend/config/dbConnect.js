// dbConnect.js

const mysql = require('mysql2/promise');
require("dotenv").config();

// 비동기 함수를 이용한 DB 연결
const dbConnect = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME 
        });
        console.log("DB Connected!");
        return connection;
    } catch (err) {
        console.error(err);
        throw err; // 오류가 발생하면 호출한 곳으로 오류를 전파합니다.
    }
}

module.exports = dbConnect;
