import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h1>Meu carrinho</h1>
        {cart.length === 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
          : cart }
        {' '}
      </div>
    );
  }
}

export default ShoppingCart;
