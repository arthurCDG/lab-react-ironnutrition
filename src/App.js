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
    setHidden(!Boolean(hidden));
  };

  const updateFoodDisplayed = (search) => {
    searchedFoods = foods.filter((food) =>
      food.name.toLowerCase().startsWith(search.toLowerCase())
    );
  };

  const addNewTodaysFoodItem = (newTodaysFoodItem) => {
    const copy = [...todaysFood];
    let totalCaloriesToRemove = 0;

    if (copy.some( el => el.name === newTodaysFoodItem.name)) {
      const index = copy.findIndex(el => el.name === newTodaysFoodItem.name);
      totalCaloriesToRemove = copy[index].quantity * copy[index].calories;
      copy[index].quantity = newTodaysFoodItem.quantity;
    } else {
      copy.push(newTodaysFoodItem);
    }

    setTodaysFood(copy);
    setTotalCal(totalCal - totalCaloriesToRemove + (newTodaysFoodItem.calories * newTodaysFoodItem.quantity))
  };

  const removeTodaysFoodItem = (foodItemToRemove) => {
    setTodaysFood(todaysFood.filter(el => el.name !== foodItemToRemove.name));
    setTotalCal(totalCal - (foodItemToRemove.calories * foodItemToRemove.quantity))
  };

  searchValue === ''
    ? (searchedFoods = allFoods)
    : updateFoodDisplayed(searchValue);

  return (
    <div className="App p-4 has-background-light">
      <h1 className="is-size-1 p-6">Lab React - IronNutrition</h1>
      {!hidden && (
        <Form
          addFoodItem={addFoodItem}
          setHidden={setHidden}
        />
      )}
      {hidden && <button className="button is-info" onClick={() => setHidden(!Boolean(hidden))}>Add new food</button>}
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
          <h1 className="is-size-2">Today's foods</h1>
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
