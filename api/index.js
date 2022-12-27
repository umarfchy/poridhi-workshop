"use strict";
import express from "express";
import cors from "cors";

// configs
const PORT =  5000;

// dummy data
const newsData = [
  { id: 1, text: "lorem ipsum dolor sit amet" },
  { id: 2, text: "consectetur adipisicing elit" },
  { id: 3, text: "laudantium esse eum ex qui" },
  { id: 4, text: "fugiat facilis similique illum" },
  { id: 5, text: "aliquid, tempora et excepturi" },
];

// base express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// '/' endpoint to test the server
app.get("/", (_, res) => res.status(200).send("Hello World!"));

// '/get' endpoint to get all news
app.get("/get", (_, res) => res.status(200).send(newsData));

// set '/create' endpoint to create a new news
app.post("/create", (req, res) => {
  const { text } = req.body;
  const id = newsData.length + 1;
  newsData.push({ id, text });
  res.status(201).send({ message: "News created successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
