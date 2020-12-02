const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, // ab cd@naver.com 으로 입력을 하면, ab와 cd 사이의 공백을 없애주는 역할을 함
        unique: 1
    },
    password: {
        type : String,
        minlength: 5
    },
    role: {
        type: Number, // 1이면 관리자, 0이면 일반 사용자
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp:{ // 토큰 유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = { User }