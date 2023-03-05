import express,{Application} from "express";
import MovieRouter from './routs/movie.route'
import {connectDB} from '../src/config/db'
const app:Application=express()
const PORT:Number=3009

connectDB()
app.use(express.json())
app.use('/movies',MovieRouter)
app.listen(PORT,()=>{console.log("express listening on port "+PORT)})
