import { useState } from "react";
import { useRouter } from "next/navigation";

const RestaurantLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState();

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, login: true }),
    });

    response = await response.json();
    if (response.success) {
      // alert("login successfully");
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    } else {
      alert("login failed");
    }
    console.log(email, password);
  };

  return (
    <>
      <div>
        <h3>login Component</h3>

        <div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter email id"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {error && !email && (
              <span className="input-error">Please fill the field</span>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter password "
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {error && !password && (
              <span className="input-error">Please fill the field</span>
            )}
          </div>
          <div className="input-wrapper">
            <button onClick={handleLogin} type="" className="button">
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantLogin;
