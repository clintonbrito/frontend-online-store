import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductsResult from '../components/ProductsResult';

export default class Home extends Component {
  state = {
    showMessage: false,
    productList: [],
    searchInput: '',
    // cartItems: [],
    // cartQtd: 0,
  };

  // addProductToCart = ({ target: { id } }) => {
  //   console.log(id);
  //   const { products } = this.props;

  //   this.setState({
  //     cartItems: products,
  //   }, () => localStorage.setItem('cartItems', JSON.stringify(products)));
  // };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
      // productId: id,
    });
  };

  handleSearch = async () => {
    const { searchInput } = this.state;
    const products = await getProductsFromCategoryAndQuery('', searchInput);

    this.setState({
      productList: products.results,
      showMessage: true,
    });
  };

  render() {
    const { productList, searchInput, showMessage } = this.state;

    return (
      <>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            type="text"
            name="searchInput"
            id=""
            value={ searchInput }
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
          showMessage && <p>Nenhum produto foi encontrado</p>
        ) : (
          productList.map(({ id, title, price, thumbnail }) => (
            <ProductsResult
              key={ id }
              title={ title }
              price={ price }
              thumbnail={ thumbnail }
              id={ id }
            />
          ))
        )}
      </>
    );
  }
}

Home.propTypes = {
  products: PropTypes.array,
}.isRequired;
