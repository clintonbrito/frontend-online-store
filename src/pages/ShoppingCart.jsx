import React, { Component } from 'react';
import { getItem } from '../services/localStorageFunctions';

export default class ShoppingCart extends Component {
  render() {
    const cart = getItem();
    // console.log(cart);

    return (
      <div>
        <h1>Meu carrinho</h1>
        {cart.length === 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : cart.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{product.title}</p>
              <p>{`R$ ${product.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
            </div>
          )) }
        {}
      </div>
    );
  }
}
