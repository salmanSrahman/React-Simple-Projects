import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import style from "./Header.module.css";
import Logo from "../../images/logo.svg";
import CustomLink from "../CustomLink/CustomLink";

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
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/cart">Cart</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
