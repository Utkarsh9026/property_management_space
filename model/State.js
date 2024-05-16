import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
  state_name: {
    type: String,
    required: true,
  },
  city: { type: [mongoose.Schema.ObjectId], ref: "City" },
});

const State = new mongoose.model("State", stateSchema);
export default State;
