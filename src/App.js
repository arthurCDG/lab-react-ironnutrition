import React, { useState } from 'react';
import './App.css';
import allFoods from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import Form from './components/Form';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [hidden, setHidden] = useState(true);

  const updateFoodsDisplayed = (newFoodItem) => {
    setFoods([...foods, newFoodItem]);
  };

  const toggleForm = () => {
    setHidden(!Boolean(hidden));
  };

  return (
    <div className="App">
      <h1>Lab React - IronNutrition</h1>
      {!hidden && (
        <Form
          hidden={hidden}
          updateFoodsDisplayed={updateFoodsDisplayed}
          toggleForm={toggleForm}
        />
      )}
      <button onClick={() => toggleForm()}>Add new food</button>
      {foods.map((food) => (
        <FoodBox
          key={food.name}
          name={food.name}
          calories={food.calories}
          image={food.image}
        />
      ))}
    </div>
  );
}

export default App;
