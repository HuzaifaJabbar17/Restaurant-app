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
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  let payload = await request.json();
  let result;
  let success = false;
  if (payload.login) {
    result = await Restaurant.findOne({
      email: payload.email,
      password: payload.password,
    });
    if (result) {
      success = true;
    }
  } else {
    const restaurant = new Restaurant(payload);
    result = await restaurant.save();
    if (result) {
      success = true;
    }
  }
  return NextResponse.json({ result, success });
}
