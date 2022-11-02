import mongoose from 'mongoose';
import path from "path"
import dotenv from "dotenv";
dotenv.config();
const dbUser = process.env.DATABASE_USER
const dbPass = process.env.DATABASE_PASS;
const dbName = process.env.DATABASE_NAME;
const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbName}.yuuqmi5.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error('Not Connected', err));
