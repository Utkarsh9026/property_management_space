import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  city_name: {
    type: String,
    required: true,
  },
});

const City = new mongoose.model("City", citySchema);
export default City;
