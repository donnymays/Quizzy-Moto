import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';



function Header(){
  return (
    <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
        <hr/>
    </React.Fragment>
  );
}

export default Header;
