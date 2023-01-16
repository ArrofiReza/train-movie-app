import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import http from 'http'
import mongoose from 'mongoose'
import "dotenv/config"

const app = express()
const port = process.env.PORT || 5000
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("mongo db connected")
        server.listen(port, ()=>{
            console.log(`server run on localhost:${port}`)
        })
    })
    .catch((err)=>{
        console.log(err)
        process.exit(1)
    })