import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';

describe('<RecipeDetail />', () => {
  let testRecipe;

  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'Test Recipe',
      category: 'Test category',
      ingredients: ['Ing 1', 'Ing 2'],
      steps: ['step 1', 'step 2'],
    };
  });

  test('Should render zero state', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>,
    );
    const tree = component.toJSON();


    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render a recipe', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();


    expect(tree).toMatchSnapshot();
  });

  test('Should correctly assign a className', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} className="className-test" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();


    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe without ingredients', () => {
    delete testRecipe.ingredients;

    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();


    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe without steps', () => {
    delete testRecipe.steps;

    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();


    expect(tree).toMatchSnapshot();
  });
});
