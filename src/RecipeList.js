import React from "react";

import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, setRecipes }) {
  const recipeList = recipes.map((recipe) => (
    <RecipeRow
      singleRecipe={recipe}
      allRecipes={recipes}
      setRecipes={setRecipes}
      key={recipe.name}
    />
  ));

  return (
    <div className="recipe-list">
      <table className="table-primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
