import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PropertyRoutes from "./routes/property.routes.js";
import StateAndCity from "./routes/stateAndcity.routes.js";
import FindCityStateRoutes from "./routes/findCityState.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_LOCATION)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.use("/", PropertyRoutes);
app.use("/", StateAndCity);
app.use("/", FindCityStateRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is running at port: ${process.env.PORT}`);
});
