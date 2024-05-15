"use client";
import { useState } from "react";
import "../style.css";

import RestaurantHeader from "@/app/_components/RestaurantHeader";
import RestaurantFooter from "@/app/_components/RestaurantFooter";
import AddFoodItem from "@/app/_components/AddFoodItem";

const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);

  return (
    <>
      <RestaurantHeader />
      <button onClick={() => setAddItem(true)}>Add Food Item</button>
      <button onClick={() => setAddItem(false)}>Dashboard</button>

      {addItem ? <AddFoodItem /> : <h3>Dashboard </h3>}

      <RestaurantFooter />
    </>
  );
};
export default Dashboard;
