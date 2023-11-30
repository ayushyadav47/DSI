import express from 'express';
import cors from 'cors'

import connect from "../mongo_connect/connectDB.js";
import Setup from './api/setup.js'
import Teacher from './api/teacher.js';

const app=express();
connect();

const PORT=80;

app.use(cors());

app.use('/api/setup',Setup);
app.use('/api/teacher',Teacher);

app.listen(PORT,()=>{
    console.log('Port: '+PORT)
  } 
)