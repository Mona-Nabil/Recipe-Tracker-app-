import React, { useState } from "react";

function RecipeCreate({ setRecipes }) {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setNewRecipe((newRecipe) => ({
      ...newRecipe,
      [name]: value,
    }));
    console.log(newRecipe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setRecipes((recipeData) => [...recipeData, newRecipe]);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required textarea and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form onSubmit={handleSubmit} name="create">
      <table className="table-primary">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                required
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="URL"
                required
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                required
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                type="text"
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                required
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
