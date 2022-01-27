import React from 'react';

const TodaysFoodItem = ({ todaysFood, removeTodaysFoodItem }) => {
  return (
    <>
      {todaysFood.map((foodItem, i) => (
        <li key={i} className="is-flex is-justify-content-right m-4">
          <div className='mr-6'>
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
          {/* -------------- TESTS -------------- */}
          <span className='icon'>
            <i className="fas fa-ban"></i>
          </span>
        </li>
      ))}
    </>
  );
};

export default TodaysFoodItem;
