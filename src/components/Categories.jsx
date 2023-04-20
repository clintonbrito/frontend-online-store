import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    categoriesList: [],
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

  render() {
    const { categoriesList } = this.state;
    return (
      <aside>
        <p>Categorias:</p>
        {
          categoriesList.map(({ id, name }) => (
            <label htmlFor="category-input" key={ id }>
              <input
                data-testid="category"
                type="radio"
                value={ name }
                name="categories"
                id="categories-input"
              />
              { name }
            </label>
          ))
        }
      </aside>
    );
  }
}
