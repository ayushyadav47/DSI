import express from 'express';
import cors from 'cors'

import connect from "../mongo_connect/connectDB.js";
import Admin from './api/admin.js'

const app=express();
connect();

const PORT=80;

app.use(cors());

app.use('/api/admin',Admin);

app.listen(PORT,()=>{
    console.log('Port: '+PORT)
  } 
)