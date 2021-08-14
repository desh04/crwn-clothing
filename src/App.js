import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utilis';

/* const HatsPage = () => (
  
  <div>
    <h1> HATS PAGE </h1>
  </div>
  was using this only for the routing lesson demonstration 
) */



// we want to store the info of the user who has been login
// And pass it down the line to component who need to use it ,
// so will convert the Function component to class component.

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // auth is open subscription method
    // onAuthStateChanged method on auth library takes state of user as parameter.  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    }
    );
    // this open subscription is open messaging system between our application and our firebase app.
    // when every any chages occur on firebase from any source related to this app. 
    // firebase sends out the message that auth state has changed (user has updated.)
    // We don't need to always fetch to get the information . 
  }
  // with firebase authentication speed has been reduced.

    // 'auth.onAuthStateChanged' connection is always open as long as our App component is mounted on our DOM. 
    // Because it's open subscription we will also have to close this subscription when this Unmount . 
    // because we don't want memory leak . 


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/*need to aware the Header that person is signINed */
        /* for this we will give header user current state access */ }
        <Header currentUser= { this.state.currentUser } /> 
        <Switch>     
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/hats" component={HatsPage} /> using for the demonstration perpose only*/}
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={SignInAndSignUpPage} />
        </Switch> 
      </div>
    );
  }
  
}

export default App;
