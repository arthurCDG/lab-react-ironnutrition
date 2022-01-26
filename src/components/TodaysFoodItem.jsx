import React from 'react';

const TodaysFoodItem = ({ todaysFood, removeTodaysFoodItem }) => {
  return (
    <>
      {todaysFood.map((foodItem, i) => (
        <li key={i}>
            <span>{foodItem.quantity} </span>
            <span>{foodItem.name}</span>
            <span>{Number(foodItem.quantity) !== 1 && 's'} -{' '}</span>
            <span>{foodItem.quantity * foodItem.calories} cal</span>
            <span><button onClick={() => removeTodaysFoodItem({name: foodItem.name, quantity: foodItem.quantity, calories: foodItem.calories})}>Delete</button></span>
        </li>
      ))}
    </>
  );
};

export default TodaysFoodItem;
