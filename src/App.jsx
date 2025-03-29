// src/App.jsx

import { useState } from "react";

import "./App.css";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import IngredientList from "./components/IngredientList/IngredientList";

let latestStackKey = 0;

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];
  const [stack, setStack] = useState([]);

  function addToBurger(ingredient) {
    const newStack = [...stack];
    newStack.push({ ingredient, key: latestStackKey });
    latestStackKey++;
    setStack(newStack);
  }

  function removeFromBurger(ingredient) {
    const newStack = [...stack];

    // Remove the last occurrence of the ingredient
    // from the stack
    for (let i = newStack.length - 1; i >= 0; i--) {
      if (newStack[i].ingredient === ingredient) {
        newStack.splice(i, 1);
        break;
      }
    }
    setStack(newStack);
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <h2>{stack.length === 0 ? "No Ingredients" : ""}</h2>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          handleClick={addToBurger}
        />
        <BurgerStack stack={stack} handleClick={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
