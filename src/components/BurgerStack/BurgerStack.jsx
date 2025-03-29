// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, handleClick }) => {
  return (
    <ul>
      {
        // Copy the array since reversing modifies it in-place
        [...stack].reverse().map(({ ingredient, key }) => (
          <li
            key={key}
            style={{ backgroundColor: ingredient.color }}
            onClick={() => handleClick(ingredient)}
          >
            {ingredient.name}
          </li>
        ))
      }
    </ul>
  );
};

export default BurgerStack;
