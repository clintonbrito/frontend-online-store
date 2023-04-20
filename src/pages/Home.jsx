import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  state = {
    productList: [],
    name: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSearch = async () => {
    const { name } = this.state;
    const products = await getProductsFromCategoryAndQuery('', name);

    this.setState({
      productList: products.results,
    });
  };

  render() {
    const { productList, name } = this.state;

    return (
      <>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            type="text"
            name="name"
            id=""
            value={ name }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <button
            data-testid="query-button"
            onClick={ this.handleSearch }
          >
            Buscar
          </button>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho de compras</Link>
        </div>
        <Categories />
        {productList.length === 0 ? (
          <p>
            Nenhum produto foi encontrado
          </p>
        ) : (
          productList.map((product) => (
            <div key={ product.id } data-testid="product">
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </div>
          ))
        )}
      </>
    );
  }
}
