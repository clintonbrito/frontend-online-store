import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    console.log(id);
    const product = await getProductById(id);
    this.setState({
      productInfo: product,
      isLoading: false,
    });
    console.log(product);
  };

  render() {
    const { productInfo, isLoading } = this.state;
    // const { title, thumbnail, price } = productInfo;
    return (
      <div>
        { isLoading ? (<p>Carregando</p>) : (
          <div data-testid="product">
            <h1>Página do Produto</h1>
            <h3>{ productInfo.title }</h3>
            <img src={ productInfo.thumbnail } alt={ productInfo.title } />
            <p>{ productInfo.price }</p>
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
