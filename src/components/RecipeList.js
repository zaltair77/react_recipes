import React from 'react'

const RecipeList = (props) => (
  <div style={props.style}>
    <h2>Recipes</h2>
    <ul>
      <li>
        <span>Recipe1</span>
        <span>Rec1Cat</span>
      </li>
      <li>
        <span>Recipe2</span>
        <span>Rec2Cat</span>
      </li>
      <li>
        <span>Recipe3</span>
        <span>Rec3Cat</span>
      </li>
    </ul>
  </div>
)

export default RecipeList
