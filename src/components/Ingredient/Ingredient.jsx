export default function Ingredient({ ingredient, handleClick, buttonContent }) {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      <span>{ingredient.name}</span>
      <button onClick={() => handleClick(ingredient)}>{buttonContent}</button>
    </li>
  );
}
