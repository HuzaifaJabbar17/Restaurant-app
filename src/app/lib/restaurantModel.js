import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({ name: String });

export const Restaurant =
  mongoose.models.restaurants || mongoose.model("restaurants", RestaurantSchema);
