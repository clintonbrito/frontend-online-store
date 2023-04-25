import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import { getItem } from '../services/localStorageFunctions';

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

  addToCart = (item) => {
    const previousStorage = getItem();
    let updateStorage = [];
    const newItem = item;
    const existingProduct = previousStorage.find((product) => product.id === item.id);
    if (existingProduct) {
      const newpreviousStorage = previousStorage
        .filter((product) => product.id !== item.id);
      existingProduct.quantity += 1;
      updateStorage = [...newpreviousStorage, existingProduct];
    } else {
      newItem.quantity = 1;
      updateStorage = [...previousStorage, newItem]; // o local Storage é um array então aqui eu faço um spread para add o novo item no meu array
    }
    localStorage.setItem('cart', JSON.stringify(updateStorage));
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
            <button
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.addToCart(productInfo) }
            >
              Adicionar ao Carrinho
            </button>
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
