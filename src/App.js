import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";


function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <div className="flex-container">
        <RecipeList recipes={recipes} setRecipes={setRecipes} />
        <div className="flex-container">
          <RecipeCreate setRecipes={setRecipes} />
        </div>
      </div>
    </div>
  );
}

export default App;
