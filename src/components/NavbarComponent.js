import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";


const NavbarComponent = (props) => {

  let user;
  if(localStorage.getItem("user")!=null)
    user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar color="light" light expand="md" className="mb-5">
        <Container>
          <NavbarBrand href="/">Hello{user!=null ? " " + user["user"] : " stranger"}</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;