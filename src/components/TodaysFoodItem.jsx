import React from 'react';

const TodaysFoodItem = ({ todaysFood, removeTodaysFoodItem }) => {
  return (
    <>
      {todaysFood.map((foodItem, i) => (
        <li key={i} className="is-flex is-justify-content-space-evenly">
          <div>
            <span>{foodItem.quantity} </span>
            <span>{foodItem.name}</span>
            <span>{Number(foodItem.quantity) !== 1 && 's'} - </span>
            <span>{foodItem.quantity * foodItem.calories} cal</span>
          </div>
          <span>
            <button
              className="button is-danger is-hovered is-small"
              onClick={() =>
                removeTodaysFoodItem({
                  name: foodItem.name,
                  quantity: foodItem.quantity,
                  calories: foodItem.calories,
                })
              }
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </>
  );
};

export default TodaysFoodItem;
