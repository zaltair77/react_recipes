import React from 'react'
import RecImg from '../static/images/capture.png'

const RecipeDetail = (props) => (
  <div style={props.style}>
    <h2>Recipe1</h2>
    <img src='https://media.pitchfork.com/photos/5c47501a828b6307e6d863e9/1:1/w_320/Gallipoli_Beirut.jpg' />
    <div>
      <span>Cat</span>
      <span>Cal</span>
    </div>
    <h3>Ingredients</h3>
    <ul>
      <li>Ing1</li>
      <li>Ing2</li>
      <li>Ing3</li>
      <li>Ing4</li>
      <li>Ing5</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li>Step1</li>
      <li>Step2</li>
      <li>Step3</li>
      <li>Step4</li>
      <li>Step5</li>
    </ol>
  </div>
)

export default RecipeDetail
