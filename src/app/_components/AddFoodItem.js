import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [path, setPath] = useState();
  const [description, setDescription] = useState();

  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
  };

  return (
    <div className="container">
      <h1>Add Food Item</h1>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleAddFoodItem}>
          Add Food item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
