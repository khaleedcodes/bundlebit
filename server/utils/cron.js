import cron from "cron";
// import https from "https";
import http from "http";

const URL = "http://localhost:5000/api/ping";

const job = new cron.CronJob("*/14 * * * *", function () {
  // const job = new cron.CronJob("*/10 * * * * *", function () {
  // https
  http
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
