import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !name ||
      !city ||
      !address ||
      !contact
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    console.log(email, password, confirmPassword, name, city, address, contact);
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contact }),
    });

    response = await response.json();
    console.log(response);

    if (response.success) {
      // alert("Restaurant registered successfully");
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };

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

            {error && !email && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter restaurant name"
              className="input-field"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
            {error && !name && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="test"
              placeholder="enter city"
              className="input-field"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            ></input>
            {error && !city && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter address"
              className="input-field"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            ></input>
            {error && !address && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="number"
              placeholder="enter phone number"
              className="input-field"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
            ></input>
            {error && !contact && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter password "
              className="input-field"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
            {passwordError && (
              <span className="input-error">
                {" "}
                password and confirmPassword does not match{" "}
              </span>
            )}
            {error && !password && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter confirm password "
              className="input-field"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></input>
            {passwordError && (
              <span className="input-error">
                {" "}
                password and confirmPassword does not match{" "}
              </span>
            )}
            {error && !confirmPassword && (
              <span className="input-error"> please fill the field </span>
            )}
          </div>

          <div className="input-wrapper">
            <button type="" className="button" onClick={handleSignUp}>
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
