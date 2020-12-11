import React from "react";
import Header from "./Header";
import QuizControl from "./QuizControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container}  from "react-bootstrap";
import { useSelector } from 'react-redux'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import firebase from 'firebase/app';

function App(){
  
  
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route exact path="/">
          <Container>
            <QuizControl />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;