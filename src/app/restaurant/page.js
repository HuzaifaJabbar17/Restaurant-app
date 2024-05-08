"use client";
import { useState } from "react";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantFooter from "../_components/RestaurantFooter";
import "./style.css";

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
