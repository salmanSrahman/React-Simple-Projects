import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";
import Logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className={style.Header__container}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`${style.nav__container} ms-auto my-2 my-lg-0`}
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action3">Recipes</Nav.Link>
              <Nav.Link href="#action4">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
