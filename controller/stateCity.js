import State from "../model/State.js";
import City from "../model/City.js";

export const createState = async (req, res) => {
  try {
    let { state_name } = req.body;
    if (!state_name) {
      return res.status(400).json({ message: "Enter state name" });
    }
    const isExistingState = await State.findOne({ state_name });
    if (isExistingState) {
      return res.status(400).json({ message: "State already exist" });
    }
    const newState = new State({
      state_name,
    });
    await newState.save();
    return res.status(200).json({ message: "State created succefully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createCity = async (req, res) => {
  try {
    const { state_name, city_name } = req.body;
    if (!state_name || !city_name) {
      return res.status(400).json({ message: "Enter the required details" });
    }
    const isExistingCity = await City.findOne({ city_name });
    if (isExistingCity) {
      return res.status(400).json({ message: "City already exists" });
    }
    const newCity = new City({
      city_name,
    });
    newCity.save().then((data) => {
      State.findOneAndUpdate({ state_name }, { $push: { city: data._id } })
        .then(() => {
          return res
            .status(200)
            .json({ message: "City created successfully!" });
        })
        .catch((err) => {
          return res.status(500).json({ message: err.message });
        });
    });
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
};
