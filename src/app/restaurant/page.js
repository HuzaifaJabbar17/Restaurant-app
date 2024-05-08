"use client";
import { useState } from "react";
import RestaurantHeader from "../_components/restaurantHeader";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import "./style.css";
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant = () => {
  const [Login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <RestaurantHeader />
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
      <RestaurantFooter/>
    </>
  );
};

export default Restaurant;
