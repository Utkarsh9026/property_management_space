import Property from "../model/Property.js";

export const createProperty = (req, res) => {
  try {
    let { property_name, property_address, city, state } = req.body;
    if (!property_name || !property_address || !city || !state) {
      return res.status(400).json({ err: "Detail missing" });
    }
    let property = new Property(req.body);
    property
      .save()
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => {
        return res.status(500).json({ err: err.message });
      });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

export const fetchProperty = (req, res) => {
  try {
    let { city_name } = req.body;
    if (!city_name) {
      return res.status(400).json({ err: "Enter city name" });
    }
    Property.find({ city: city_name })
      .select()
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => {
        return res.status(500).json({ err: err.message });
      });
  } catch (error) {
    return res.status(500).json({ err: err.message });
  }
};

export const updatePropertyDetails = async (req, res) => {
  try {
    let { property_id, property_name, property_address, city, state } =
      req.body;
    if (
      !property_id ||
      !property_name ||
      !property_address ||
      !city ||
      !state
    ) {
      return res.status(400).json({ err: "Details missing" });
    }
    const updatedProperty = await Property.findByIdAndUpdate(
      { _id: property_id },
      { property_name, property_address, city, state },
      { new: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    const properties = await Property.find();
    return res.status(200).json({ properties });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const similarProperties = async (req, res) => {
  let { property_id } = req.body;
  if (!property_id) {
    return res.status(400).json({ err: "Property id is missing" });
  }

  const property = await Property.findById({ _id: property_id });

  if (!property) {
    return res.status(400).json({ message: "Property not found" });
  }
  await Property.find({ city: property.city })
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((err) => {
      return res.status(500).json({ err: err.message });
    });
};
