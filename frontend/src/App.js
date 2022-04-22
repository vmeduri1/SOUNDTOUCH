import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage"
import Navigation from './components/Navigation/';
import HomePage from './components/HomePage';
import Upload from './components/Uploads';
import Footer from './components/Footer'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // taps heroku app every 5 minutes
  var http = require("http");
  setInterval(function() {
    http.get("http://https://sound-touch.herokuapp.com/");
  }, 300000); // every 5 minutes (300000)

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
            <Route exact path ='/'>
              <HomePage/>
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
                <SignupFormPage />
            </Route>
            <Route path='/upload'>
                <Upload/>
            </Route>
        </Switch>
      )}
      <Footer/>
    </>
  );
}

export default App;
