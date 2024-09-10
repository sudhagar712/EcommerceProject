import express from "express";
import { products } from "./data/products.js";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/api/products/:id", (req, res) => {
    // console.log(req);
    console.log(req.params)
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => 
    console.log(`My Server is Working on Port ${port}`)
);
