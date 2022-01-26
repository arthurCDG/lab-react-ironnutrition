import React, {useState} from 'react';

const Form = ({hidden, updateFoodsDisplayed, toggleForm}) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newFood = {name, calories, image};
    console.log(newFood);
    console.log(typeof newFood);
    updateFoodsDisplayed(newFood);
    toggleForm();
  }

  return (
    <form hidden={hidden} onSubmit={(evt) => handleSubmit(evt)}>
      <input type="text" name="name" placeholder='Name' onChange={(evt) => setName(evt.target.value)}/>
      <input type="text" name="calories" placeholder='Calories' onChange={(evt) => setCalories(evt.target.value)}/>
      <input type="file" name="image" onChange={(evt) => setImage(URL.createObjectURL(evt.target.files[0]))} />
      <button>Add food</button>
    </form>
    );
};

export default Form;
