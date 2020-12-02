const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const mongo_config = require('./mongo_config')
mongoose.connect(mongo_config.config, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err))



app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`server listening ${port}...`)
})