"use client";
import { useState } from "react";
import RestaurantSignUp from "../_components/_restaurantSignUp";
import RestaurantLogin from "../_components/restaurantLogin";

const Restaurant = () => {
  const [Login, setLogin] = useState(true);
  return (
    <>
      <h1>Restaurant Login / SignUp page</h1>
      {Login ? <RestaurantLogin /> : <RestaurantSignUp />}

      <div>
        <button onClick={() => setLogin(!Login)}>
          {Login
            ? "Do not have an account? SignUp"
            : "Already have account? Login"}
        </button>
      </div>
    </>
  );
};

export default Restaurant;
