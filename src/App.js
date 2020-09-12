import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51HQ6h6JCBlY3U5sJ4D3QEWnjVJwlH5Muh3YB6Dpf4gmxRe4LX7fAKyzNtfqWhmh4opWQZuYdpKW7nrPOad9J2ZSD0051aqlBjA')

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authuser => {
      console.log('The user is >>>',authuser)
      if(authuser){ //user logged in
        dispatch({
          type: 'SET_USER',
          user:authuser
        })
      }else{ //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        
        <Switch> 
            <Route path="/orders">
              <Header/>
              <Orders/>
            </Route> 
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/checkout">
               <Header/> 
              <Checkout/>
            </Route>

            <Route path="/">
              <Header/>
              <Home/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
