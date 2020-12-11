import React from "react";
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';



function Header(){
  return (
    <React.Fragment>
      <Navbar bg="dark">
      <Link to="/"><Navbar.Brand >Home</Navbar.Brand></Link>
      <Link to="/signin"><Navbar.Brand  >Sign In</Navbar.Brand></Link>
      </Navbar>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
        <hr/> */}
    </React.Fragment>
  );
}

export default Header;

// import React from "react";
// import * as ReactBootStrap from "react-bootstrap";

// function Header () {
//   return (
//     <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
//       <ReactBootStrap.Navbar.Brand href="#home">The Holy Spirits</ReactBootStrap.Navbar.Brand>
//       <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
//         <ReactBootStrap.Nav className="mr-auto">      
//           <ReactBootStrap.Nav.Link href="#NewItem">Add a Keg</ReactBootStrap.Nav.Link>  
//           <ReactBootStrap.Nav.Link href="#pricing">Keg List</ReactBootStrap.Nav.Link> 
//         </ReactBootStrap.Nav>
//         <ReactBootStrap.Nav>
//           <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
//         </ReactBootStrap.Nav>
//       </ReactBootStrap.Navbar.Collapse>  
//     </ReactBootStrap.Navbar>
//   );
//   }

// export default Header;
