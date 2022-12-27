"use strict";
import express from "express";
import cors from "cors";
import { PORT } from "./configs.js";
import { addNewsToDB, getNewsFromDB } from "./db.js";

// base express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// '/' endpoint to test the server
app.get("/", (_, res) => res.status(200).send("Hello World!"));

// '/get' endpoint to get all news
app.get("/get", async (_, res) => {
  try {
    const data = await getNewsFromDB();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "Error getting news" });
  }
});

// set '/create' endpoint to create a new news
app.post("/create", async (req, res) => {
  try {
    const { text } = req.body;
    await addNewsToDB(text);
    res.status(201).send({ message: "News created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error creating news" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
