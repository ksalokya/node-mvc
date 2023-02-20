import express from 'express';
import dotenv from "dotenv";
import connectDB from './database/dbConnection.js';
import userRoute from './route/userRoute.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
dotenv.config({path : `./config/.env`})

// database connection
connectDB()
    .then(() =>console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// user routes 
app.use('/', userRoute);


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
