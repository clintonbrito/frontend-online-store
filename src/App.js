import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart 🛒</h1>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
