import express from "express";
import { findCityState } from "../controller/findCityState.js";

const FindCityStateRoutes = express.Router();

FindCityStateRoutes.post("/find-cities-by-state", findCityState);

export default FindCityStateRoutes;
