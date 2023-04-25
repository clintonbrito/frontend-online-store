import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
      <div>
        <h1>Meu carrinho</h1>
        {cart.length === 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : cart.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{product.name}</p>
              <p>{`R$ ${product.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
            </div>
          )) }
        {}
      </div>
    );
  }
}
