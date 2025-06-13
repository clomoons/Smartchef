import React from 'react';

function RecipeCard({ title, ingredients }) {
  return (
    <div className="recipe-card">
      <h3>{title}</h3>
      <p>{ingredients}</p>
    </div>
  );
}

export default RecipeCard;
