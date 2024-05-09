import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address,setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp =() =>{
    console.log(email,password,confirmPassword,name,city,address,contact);
  }

  return (
    <>
      <div>
        <h3>SignUp Component</h3>

        <div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter email id"
              className="input-field"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter restaurant name"
              className="input-field"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="test"
              placeholder="enter city"
              className="input-field"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter address"
              className="input-field"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="number"
              placeholder="enter phone number"
              className="input-field"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter password "
              className="input-field"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter confirm password "
              className="input-field"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></input>
          </div>

          <div className="input-wrapper">
            <button type="" className="button" 
            onClick={handleSignUp}
            >
              {" "}
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantSignUp;
