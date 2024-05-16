import State from "../model/State.js";

export const findCityState = async (req, res) => {
  let { state_id, state_name } = req.body;
  if (!state_id && !state_name) {
    return res
      .status(400)
      .json({ message: "Provide state_id or state_name to fetch details" });
  }
  if (state_id) {
    const cities = await State.findById({ _id: state_id })
      .populate("city", "city_name -_id ")
      .select("-_id");
    return res.status(200).json({ data: cities });
  } else {
    const cities = await State.find({ state_name })
      .populate("city", "city_name -_id ")
      .select("-_id");
    return res.status(200).json({ data: cities });
  }
};
