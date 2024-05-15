const mongoose = require("mongoose");

const foodModel = mongoose.Schema({
  name: String,
  price: Number,
  img_path: String,
  description: String,
  restaurant_id: mongoose.Schema.Types.ObjectId,
});

export const foods =
  mongoose.models.foods || mongoose.model("foods", foodModel);
