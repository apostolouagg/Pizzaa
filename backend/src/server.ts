import express from "express";
import cors from "cors";

const app = express();

//localhost:4200 angular
//localhost:5000 express
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

//APIs
app.get("/api/foods", (req, res) => {
    res.send("Hello World");
});

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});