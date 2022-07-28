import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connect } from "./db/config";
import reviewsRoute from "./routes/reviews";
const app: Express = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(reviewsRoute);

app.listen(port, async () => {
  await connect().then(() => {
    console.log("mongoes was connected");
  });
  console.log(`Example app listening on port ${port}!`);
});
