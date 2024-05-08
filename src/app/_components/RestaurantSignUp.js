const RestaurantSignUp = () => {
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
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter restaurant name"
              className="input-field"
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="test"
              placeholder="enter city"
              className="input-field"
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter address"
              className="input-field"
            ></input>
          </div>

          <div className="input-wrapper">
            <input
              type="number"
              placeholder="enter phone number"
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
            <input
              type="password"
              placeholder="enter confirm password "
              className="input-field"
            ></input>
          </div>


          <div className="input-wrapper">
            <button type="" className="button">
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
