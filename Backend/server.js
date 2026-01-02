import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from './Config/db.js'
import userRoutes from './Routes/User.route.js'
dotenv.config()
const app=express()
connect()
app.use(express.json())
app.use(cors())


app.use('/api/user',userRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})