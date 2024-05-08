"use client";
import { useState } from "react";
import RestaurantSignUp from "../_components/_restaurantSignUp";
import RestaurantLogin from "../_components/restaurantLogin";

const Restaurant = () => {
  const [Login, setLogin] = useState(true);
  return (
    <>
    <div className="container">
    <h1>Restaurant Login / SignUp page</h1>
      {Login ? <RestaurantLogin /> : <RestaurantSignUp />}

      <div>
        <button className="button-link" onClick={() => setLogin(!Login)}>
          {Login
            ? "Do not have an account? SignUp"
            : "Already have account? Login"}
        </button>
      </div>
    </div>
    </>
  );
};

export default Restaurant;
