import React, { useState } from 'react';
import './App.css';
import allFoods from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import Form from './components/Form';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [hidden, setHidden] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  let searchedFoods;

  const addFoodItem = (newFoodItem) => {
    setFoods([...foods, newFoodItem]);
  };

  const updateFoodDisplayed = (search) => {
    searchedFoods = foods.filter((food) =>
      food.name.toLowerCase().startsWith(search.toLowerCase())
    );
  };

  const toggleForm = () => {
    setHidden(!Boolean(hidden));
  };

  searchValue === ''
    ? (searchedFoods = allFoods)
    : updateFoodDisplayed(searchValue);

  return (
    <div className="App">
      <h1>Lab React - IronNutrition</h1>
      {!hidden && (
        <Form
          hidden={hidden}
          addFoodItem={addFoodItem}
          toggleForm={toggleForm}
        />
      )}
      <button onClick={() => toggleForm()}>Add new food</button>
      <hr />
      <Search setSearchValue={setSearchValue} />
      <hr />
      {searchedFoods.map((food) => (
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
