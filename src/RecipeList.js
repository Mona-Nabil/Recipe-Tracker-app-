import React from "react";
// 1-fetch the data
// import RecipeData from "./RecipeData";
import RecipeRow from "./RecipeRow";

function RecipeList({ recipes, setRecipes }) {
  // 2- iterate over the data
  const recipeList = recipes.map((recipe) => (
    <RecipeRow
      singleRecipe={recipe}
      allRecipes={recipes}
      setRecipes={setRecipes}
      key={recipe.name}
    />
  ));
  // 2.5 filter if needed
  // 3-display the data

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

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
