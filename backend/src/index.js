import express from 'express';
import cors from 'cors'

import connect from "../mongo_connect/connectDB.js";
import Setup from './api/setup.js'

const app=express();
connect();

const PORT=80;

app.use(cors());

app.use('/api/setup',Setup);

app.listen(PORT,()=>{
    console.log('Port: '+PORT)
  } 
)