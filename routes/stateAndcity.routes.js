import express from "express";
import { createCity, createState } from "../controller/stateCity.js";

const StateAndCity = express.Router();

StateAndCity.post("/create-state", createState);
StateAndCity.post("/create-city", createCity);

export default StateAndCity;
