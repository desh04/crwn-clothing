import React from 'react';
import { Switch , Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';

/* const HatsPage = () => (
  
  <div>
    <h1> HATS PAGE </h1>
  </div>
  was using this only for the routing lesson demonstration 
) */

function App() {
  return (
    <div>
      <Switch>     
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/hats" component={HatsPage} /> using for the demonstration perpose only*/}
        <Route exact path='/shop' component={ShopPage} />
      </Switch> 
    </div>
  );
}

export default App;
