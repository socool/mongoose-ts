import express from 'express';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';
import mongoose from 'mongoose';

const app = express()
app.use(json())
app.use(todoRouter)

require('dotenv').config()

let mongo_url:string = process.env.MONGODB_URL!;
mongoose.connect(mongo_url).then(() => console.log('Mongodb Connected'))

app.listen(3000,() => {
    console.log('server is listening on port 3000')
})