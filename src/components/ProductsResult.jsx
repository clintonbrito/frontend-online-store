import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductsResult extends Component {
  addProductToCart = (id) => {
    const { name, price, thumbnail } = this.props;
    const product = { id, name, price, thumbnail };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((p) => p.id === id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  render() {
    const { name, price, thumbnail, id } = this.props;

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
          onClick={ () => this.addProductToCart(id) }
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
