import express from "express";
import {
  createProperty,
  fetchProperty,
  similarProperties,
  updatePropertyDetails,
} from "../controller/property.js";
const PropertyRoutes = express.Router();

PropertyRoutes.post("/create-new-property", createProperty);
PropertyRoutes.post("/fetch-property-datails", fetchProperty);
PropertyRoutes.put("/update-property-details", updatePropertyDetails);
PropertyRoutes.post("/find-similar-properties", similarProperties);

export default PropertyRoutes;
