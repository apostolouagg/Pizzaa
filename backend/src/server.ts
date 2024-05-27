import express from "express";
import cors from "cors";
import { sample_foods, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

//localhost:4200 angular
//localhost:5000 express
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

//APIs
app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
});


//get food/:id
app.get("/api/foods/food/:id", (req, res) => {
    const id = req.params.id;
    const foods = sample_foods.find(food => food.id == id);
    res.send(foods);
});

//login
app.post("/api/users/login", (req, res) =>{
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("User name or password is not valid!");
    }
});


const generateTokenResponse = (user:any) => {
    const token = jwt.sign({email: user.email, isAdmin:user.isAdmin}, "sometext", {expiresIn:"30d"});

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});