import express from "express";
import cors from "cors";
import foodRouter from '../../backend/src/routers/food.router';
import userRouter from '../../backend/src/routers/user.router';
import orderRouter from '../../backend/src/routers/order.router';
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
app.use("/api/orders", orderRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});