import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/shop'
import { setCurrentUser } from './redux/user/user.actions'
import Header from './components/header/header'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import CheckoutPage from './pages/checkout/checkout';

class App extends React.Component {
  unsubscribeFromAuth = null
  //current user
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin"
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
