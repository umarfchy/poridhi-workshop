"use strict";

import express from "express";

// configs
const PORT = 5000;

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// dont forget to add cors later

// '/' endpoint to test the server

// '/get' endpoint to get all news

// set '/create' endpoint to create a new news

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
