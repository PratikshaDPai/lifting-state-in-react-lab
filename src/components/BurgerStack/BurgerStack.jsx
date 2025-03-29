// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, handleClick }) => {
  return (
    <ul>
      {
        // Copy the array since reversing modifies it in-place
        [...stack].reverse().map(({ ingredient, key }) => (
          <Ingredient
            key={key}
            ingredient={ingredient}
            handleClick={handleClick}
            buttonContent={"X"}
          />
        ))
      }
    </ul>
  );
};

export default BurgerStack;
