import React, { Component } from 'react';
import Categories from '../components/Categories';

export default class Home extends Component {
  state = {
    productList: [],
    searchInput: '',
  };

  render() {
    const { productList, searchInput } = this.state;

    return (
      <>
        <div>
          {productList.length === 0 ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : productList}
          <input type="text" name="search" id="" value={ searchInput } />
        </div>
        <Categories />
      </>
    );
  }
}
