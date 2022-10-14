const express = require('express')
const bodyParser = require('body-parser')
const app= express()

const dotenv =require('dotenv')
// const studentRoutes = require('./src/student/routes');
app.use(bodyParser.json());
const port = 6000
// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("hello world")
// })


// app.use('/',studentRoutes);
const connectDB  = require('./scr/database/db.js')

//Load Config
dotenv.config({path:'./scr/database/.env'})

connectDB()
app.use((req,res,next)=>{
    console.log("HTTP Method -"+req.method+",URL - "+req.url);
    next()
})


//Routes
app.use('/',require('./scr/routes/routes.js'))

app.listen(port,()=>console.log('app is runing '))