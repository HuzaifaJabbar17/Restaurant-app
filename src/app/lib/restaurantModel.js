import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  city: String,
  address: String,
  contact: String,
});

export const Restaurant =
  mongoose.models.restaurants ||
  mongoose.model("restaurants", RestaurantSchema);
