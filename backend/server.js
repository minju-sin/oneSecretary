// server.js

const express = require('express');
const dbConnect = require('./config/dbConnect');
const cors = require('cors');

const app = express();
dbConnect();

app.use(express.json());
        
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
        
// 사용자 정보
app.use("/user", require("./routes/userRoute"));


// 8080번 포트로 서버 실행 
app.listen(8080, () => {
    console.log("서버 실행 중");
});

