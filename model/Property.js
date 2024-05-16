import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  property_name: {
    type: String,
    requied: true,
  },
  property_address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const Property = new mongoose.model("Property", propertySchema);
export default Property;
