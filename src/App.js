import React, { useState } from 'react';
import './App.css';
import allFoods from './foods.json';
import FoodBox from './components/FoodBox.jsx';
import Form from './components/Form';
import Search from './components/Search';
import TodaysFoodItem from './components/TodaysFoodItem';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [hidden, setHidden] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [todaysFood, setTodaysFood] = useState([]);
  const [totalCal, setTotalCal] = useState(0);
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

  const addNewTodaysFoodItem = (newTodaysFoodItem) => {
    const copy = [...todaysFood];

    if (copy.some( el => el.name === newTodaysFoodItem.name)) {
      const index = copy.findIndex(el => el.name === newTodaysFoodItem.name);
      copy[index].quantity = newTodaysFoodItem.quantity;
    } else {
      copy.push(newTodaysFoodItem);
    }

    setTodaysFood(copy);
    setTotalCal(totalCal + (newTodaysFoodItem.calories * newTodaysFoodItem.quantity))
  };

  const removeTodaysFoodItem = (foodItemToRemove) => {
    setTodaysFood(todaysFood.filter(el => el.name !== foodItemToRemove.name));
    setTotalCal(totalCal - (foodItemToRemove.calories * foodItemToRemove.quantity))
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
      <div className='columns'>
        <div className='column'>
        {searchedFoods.map((food) => (
          <FoodBox
            key={food.name}
            name={food.name}
            calories={food.calories}
            image={food.image}
            addNewTodaysFoodItem={addNewTodaysFoodItem}
          />
        ))}
        </div>
        <div className='column'>
          <h1>Today's foods</h1>
          <ul>
            <TodaysFoodItem todaysFood={todaysFood} removeTodaysFoodItem={removeTodaysFoodItem}/>
          </ul>
          <p>Total: {totalCal} cal</p>
        </div>
      </div>
    </div>
  );
}

export default App;
