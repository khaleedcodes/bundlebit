import cron from "cron";
import http from "http";
import https from "https";
import dotenv from "dotenv";

dotenv.config();

const URL = `${process.env.API_URL}/api/ping`;

const job = new cron.CronJob("*/14 * * * *", function () {
  const client = URL.startsWith("https") ? https : http;

  client
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("Error while sending request", e);
    });
});

export default job;
