// src/components/IngredientList/IngredientList.jsx

import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, handleClick }) => {
  return (
    <ul>
      {ingredients
        .filter((ingredient) => !ingredient.isUsed)
        .map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            handleClick={handleClick}
          />
        ))}
    </ul>
  );
};

export default IngredientList;
