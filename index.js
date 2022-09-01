const makeConnection = require('./dbConnection/dbConnection')
const express = require('express')
const userRouter = require('./Routes/auth')

makeConnection();
const app = express()

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use(express.json())
app.get('/login', (req, res)=>{
    res.render('login')
})
app.get('/register', (req, res)=>{
    res.render('register')
})
app.use('/api/auth', userRouter)

app.listen(3000, ()=>{
    console.log("Listening")
})