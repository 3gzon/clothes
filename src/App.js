import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
