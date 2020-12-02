const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const mongo_config = require('./config/key')

const { User } = require('./models/User')

const bodyParser = require('body-parser')

mongoose.connect(mongo_config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.use(bodyParser.urlencoded({extended: true}))    // application/x-www-form-urlencoded
app.use(bodyParser.json())                          // application/json


app.get('/', (req, res)=>{
    res.send('Hello World!!!')
})


app.post('/register', (req, res)=>{
    // 회원 가입시 필요한 정보를 client에서 가져오면
    // 받은 정보를 데이터 베이스에 넣는다.
    console.log(req.body)
    const user = new User(req.body)
    user.save((err, userInfo)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, ()=>{
    console.log(`server listening ${port}...`)
})