"use strict";
import express from "express";
import cors from "cors";
import { PORT } from "./configs.js";
import { addNewsToDB, getNewsFromDB } from "./db.js";
import { redisConfigs } from "./configs.js";
import { createClient } from "redis";

// create redis client
const redisClient = createClient(redisConfigs);

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
    // check if there is any news in the cache
    await redisClient.connect();
    /** add missing line below 👇 */
    const cachedNewsString = "";
    if (!cachedNewsString) {
      // if there is no news in the cache, get it from the database
      const data = await getNewsFromDB();
      res.status(200).send(data);
      // add the news to the cache
      /** add missing line here */
    }
    const data = JSON.parse(cachedNewsString);
    res.status(200).send(data);
    return await redisClient.disconnect();
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

    // delete the news from the cache
    await redisClient.connect();
    /** add missing line here */
    return await redisClient.disconnect();
  } catch (error) {
    res.status(500).send({ message: "Error creating news" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
