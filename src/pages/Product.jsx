import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    productInfo: {},
    isLoading: true,
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.showProduct(id);
  }

  showProduct = async (id) => {
    const product = await getProductById(id);
    this.setState({
      productInfo: product,
      isLoading: false,
    });
  };

  render() {
    const { productInfo, isLoading } = this.state;
    // const { title, thumbnail, price } = productInfo;
    return (
      <div>
        { isLoading ? (<p>Carregando</p>) : (
          <div>
            <Link to="/cart">
              <button data-testid="shopping-cart-button">Carrinho</button>
            </Link>
            <h1>Página do Produto</h1>
            <h3 data-testid="product-detail-name">{ productInfo.title }</h3>
            <img
              data-testid="product-detail-image"
              src={ productInfo.thumbnail }
              alt={ productInfo.title }
            />
            <p data-testid="product-detail-price">{ `R$ ${productInfo.price}` }</p>
          </div>) }
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
