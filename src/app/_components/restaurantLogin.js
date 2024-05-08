const RestaurantLogin = () => {
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
            ></input>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter password "
              className="input-field"
            ></input>
          </div>
          <div className="input-wrapper">
            <button type="" className="button">
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
