import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ style, favorites, recipes, ...props }) => (
  <ul style={style} className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        {...props}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  style: PropTypes.object,
  onClick: PropTypes.func,
  favorites: PropTypes.array,
  onFavorited: PropTypes.func,
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};

export default RecipeList;
