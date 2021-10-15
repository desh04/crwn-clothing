import React from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // so APP component can update the user
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, creatUserProfileDocument } from './firebase/firebase.utilis';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

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
/* //doesn't need this after implimenting the connect with the mapDispatchToProps 
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
 */
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props;

    // auth is open subscription method
    // onAuthStateChanged method on auth library takes state of user as parameter.  
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      //this.setState({ currentUser: user });
      //creatUserProfileDocument(user);       //used when making database in firebase
      if (userAuth) {     // if user has signed in . 
        const userRef = await creatUserProfileDocument(userAuth);       
        // will get back the userRef from creatUserProfileDocument method userAUth passed in . if document is there. 
        // if document is not there, will create new obect(see firebase file) and document . and get the userRef then 

        // the code below will send us a snapshot of data that is currently stored in database. 
        userRef.onSnapshot( snapShot => {
          //console.log(snapShot, snapShot.data());\
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          /* this.setState( {
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }); */
          //console.log(this.state);
        });
        //console.log(this.state);  //async operation and it's out side so will give NULL.
      } else {
        /* this.setState({ currentUser: userAuth}); */     // setting it to null so browser knows. user is not signed in.
        setCurrentUser(userAuth);
      }

      //console.log(user);
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
        <Header />  {/* <Header currentUser= { this.state.currentUser } /> was this before the redux */} 
        <Switch>     
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/hats" component={HatsPage} /> using for the demonstration perpose only*/}
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signIn' 
            render={() =>
                this.props.currentUser ? ( 
                  <Redirect to ='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              } />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch> 
      </div>
    );
  }
  
}

//using it in redirecting the user.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


// connnect first argument is mapStateToProps, in The App component don't need that
// cause it only set the current user value ,
// so passing null as first argument
// second argument will be mapDispatchToProps 
export default connect(mapStateToProps, mapDispatchToProps)(App); 
