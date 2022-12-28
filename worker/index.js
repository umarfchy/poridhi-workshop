"use strict";
import { addNewsToDB } from "./db.js";
import { redisChannel } from "./configs.js";
import { getNewsAnalysis } from "./helper.js";
import { deleteNewsFromCache } from "./redis.js";

const expensiveWorker = async (latestNews) => {
  try {
    const newsAnalysis = getNewsAnalysis(latestNews);
    await addNewsToDB(newsAnalysis);
    await deleteNewsFromCache();
  } catch (error) {
    console.log({ error });
  }
};

const main = async () => {
  const subscriber = createClient({ url: redisUrl });
  subscriber.connect();

  subscriber.on("error", (err) => {
    console.log("\n error connecting redis \n", err);
  });

  subscriber.on("connect", () => {
    console.log("\n connected to redis \n");
  });

  subscriber.on("ready", () => {
    console.log("\n subscriber is ready \n");
    // call back fn is required
    subscriber.subscribe(redisChannel, async (message) => {
      console.log("message from worker service:- ", message);

      await expensiveWorker(message);
    });
  });
};

main();
