import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categories extends Component {
  state = {
    categoriesList: [],
    categoriesFiltered: [],
  };

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categoriesList: categories,
    });
  };

  handleClickCategories = async ({ target: { id } }) => {
    const categories = await getProductsFromCategoryAndQuery(id);
    // const result = categories.filter((category) => category.id === id);
    // console.log(categories.results);

    this.setState({
      categoriesFiltered: categories.results,
    });
  };

  render() {
    const { categoriesList, categoriesFiltered } = this.state;
    return (
      <>
        <aside>
          <p>Categorias:</p>
          {
            categoriesList.map(({ id, name }) => (
              <label htmlFor={ id } key={ id }>
                <input
                  data-testid="category"
                  type="radio"
                  value={ name }
                  name="categories"
                  id={ id }
                  onClick={ this.handleClickCategories }
                />
                { name }
              </label>
            ))
          }
        </aside>
        <div>
          { categoriesFiltered.map((category) => (
            <div key={ category.id } data-testid="product">
              <h3>{category.title}</h3>
              <img src={ category.thumbnail } alt={ category.title } />
              <p>{category.price}</p>
            </div>)) }
        </div>
      </>
    );
  }
}
