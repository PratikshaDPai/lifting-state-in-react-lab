export default function Ingredient({ ingredient, handleClick }) {
  return (
    <li
      style={{ backgroundColor: ingredient.color }}
      onClick={() => handleClick(ingredient)}
    >
      {ingredient.name}
    </li>
  );
}
