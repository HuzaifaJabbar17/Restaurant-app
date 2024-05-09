import mongoose from "mongoose";

import { NextResponse } from "next/server";
import { Restaurant } from "@/app/lib/restaurantModel.js";

export async function GET() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  const data = await Restaurant.find();
  console.log(data);
  return NextResponse.json({ data });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  const restaurant = new Restaurant(payload);
  const result = await restaurant.save();
  console.log(payload);
  return NextResponse.json({ result,success:true });
}
