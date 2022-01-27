import React, { useState } from 'react';

const Form = ({ addFoodItem, setHidden }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newFood = { name, calories, image };
    addFoodItem(newFood);
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Name"
        onChange={(evt) => setName(evt.target.value)}
      />
      <input
        className="input"
        type="text"
        name="calories"
        placeholder="Calories"
        onChange={(evt) => setCalories(evt.target.value)}
      />
      <div className="file">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="image"
            onChange={(evt) =>
              setImage(URL.createObjectURL(evt.target.files[0]))
            }
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
      {/* <input
        className="file"
        type="file"
        name="image"
        onChange={(evt) => setImage(URL.createObjectURL(evt.target.files[0]))}
      /> */}
      <button className="button" onClick={() => setHidden()}>
        Cancel
      </button>
      <button className="button">Add food</button>
    </form>
  );
};

export default Form;
