import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
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
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho de compras</Link>
      </div>
        <Categories />
      </>
    );
  }
}
