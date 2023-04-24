import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

export default class ProductsResult extends Component {
  render() {
    const { name, price, thumbnail, id } = this.props;
    // const productsObj =
    // const saveObj = (user) => localStorage.setItem(productsObj, JSON.stringify(user));

    return (
      <div
        data-testid="product"
        key={ id }
      >
        <Link
          to={ `/product/${id}` }
          data-testid="product-detail-link"
        >
          <h3>{ name }</h3>
          <img src={ thumbnail } alt={ name } />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button data-testid="product-add-to-cart">Adicionar ao Carrinho</button>
      </div>
    );
  }
}

ProductsResult.propTypes = {
  name: PropTypes.string,
}.isRequired;
