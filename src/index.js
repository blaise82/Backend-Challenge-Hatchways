import "dotenv/config";
import cors from "cors";
import express from "express";
import logger from "morgan";
import router from "./routes/index";

const app = express();

// Log requests to the console.
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
