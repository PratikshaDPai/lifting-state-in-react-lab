// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, handleClick }) => {
  return (
    <ul>
      {ingredients
        .filter((ingredient) => !ingredient.isUsed)
        .map((ingredient) => (
          <li
            key={ingredient.name}
            style={{ backgroundColor: ingredient.color }}
            onClick={() => handleClick(ingredient)}
          >
            {ingredient.name}
          </li>
        ))}
    </ul>
  );
};

export default IngredientList;
