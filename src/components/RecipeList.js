import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, favorites, recipes, ...props }) => (
  <ul style={style} className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        {...props}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func,
  favorites: PropTypes.array,
  onFavorited: PropTypes.func,
};

export default RecipeList;
