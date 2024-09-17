import express from "express";
import products from "./data/products.js";
import cors from 'cors'
import connectDB from "./Config/db.js";

const port = 5000;
const app = express();

connectDB(); // connect to mangodB


app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  // console.log(req);
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p._id === Number(id));
  //console.log(product);

  res.json(product);
});

app.listen(port, () => console.log(`My Server is Working on Port ${port}`));
