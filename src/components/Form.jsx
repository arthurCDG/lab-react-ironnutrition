import React, { useState } from 'react';

const Form = ({ addFoodItem, setHidden }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No file uploaded yet');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newFood = { name, calories, image };
    addFoodItem(newFood);
  };

  const handleFileUpload = (evt) => {
    setImage(URL.createObjectURL(evt.target.files[0]));
    setFileName(evt.target.files[0].name);
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)} className="m-4 box">
      <input
        className="input m-4"
        type="text"
        name="name"
        placeholder="Name"
        onChange={(evt) => setName(evt.target.value)}
      />
      <input
        className="input m-4"
        type="text"
        name="calories"
        placeholder="Calories"
        onChange={(evt) => setCalories(evt.target.value)}
      />
      <div class="file has-name is-boxed m-4">
        <label class="file-label">
          <input
            className="file-input"
            type="file"
            name="image"
            onChange={(evt) => handleFileUpload(evt)}
          />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">{fileName}</span>
        </label>
      </div>
      <div className="is-flex is-justify-content-right">
        <button
          className="button is-danger is-outlined mx-3"
          onClick={() => setHidden()}
        >
          Cancel
        </button>
        <button className="button is-success mx-3">Add food</button>
      </div>
    </form>
  );
};

export default Form;
