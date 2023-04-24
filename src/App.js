import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart 🛒</h1>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShoppingCart } />
        <Route exact path="/product/:id" component={ Product } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
