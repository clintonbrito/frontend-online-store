import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

export default class ProductsResult extends Component {
  render() {
    const { name, price, thumbnail, id } = this.props;

    return (
      <Link
        data-testid="product-detail-link"
        to={ `/product/${id}` }
      >
        <div data-testid="product">
          <h3>{ name }</h3>
          <img src={ thumbnail } alt={ name } />
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

ProductsResult.propTypes = {
  name: PropTypes.string,
}.isRequired;
