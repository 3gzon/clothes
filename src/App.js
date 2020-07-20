import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/shop'
import Header from './components/header/header'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null
  //current user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user })
      createUserProfileDocument(user);


      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
