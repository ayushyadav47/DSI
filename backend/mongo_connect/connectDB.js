import mongoose from 'mongoose';
import env from 'dotenv';

env.config();

export default async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_SRV);
        console.log("Connected to Cluster 0");
    }
    catch (e){
        console.log("Error while connecting to MDB:",e);
    } 
}