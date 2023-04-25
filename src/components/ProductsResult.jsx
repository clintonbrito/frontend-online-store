import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductsResult extends Component {
  render() {
    const { name, price, thumbnail, id, addProductToCart } = this.props;

    return (
      <div data-testid="product">
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          <h3>{ name }</h3>
          <img src={ thumbnail } alt={ name } />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ addProductToCart }
          id={ id }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductsResult.propTypes = {
  name: PropTypes.string,
}.isRequired;
