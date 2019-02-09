import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

// http://reactrecipes.herokuapp.com

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: null,
    };

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites } = this.props.state;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipes</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              onFavorited={this.props.toggleFavorite}
            />
          </div>
          <RecipeDetail
            style={{ flex: 5 }}
            className="ml4"
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Home;
