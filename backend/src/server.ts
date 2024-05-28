import express from "express";
import cors from "cors";
import { sample_foods, sample_users } from "./data";
import foodRouter from '../../backend/src/routers/food.router';
import userRouter from '../../backend/src/routers/user.router';
import dotenv from 'dotenv';
import { dbConnect } from "./configs/database.config";

dotenv.config();
dbConnect();

const app = express();
app.use(express.json());

//localhost:4200 angular
//localhost:5000 express
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});