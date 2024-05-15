import mongoose from "mongoose";

import { NextResponse } from "next/server";
import { foods } from "@/app/lib/foodModel";

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  const AddFoodItem = new foods(payload);
  const result = await AddFoodItem.save();

  return NextResponse.json({ result, success: true });
}
