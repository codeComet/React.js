import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavItem, NavbarBrand } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark className="p-3">
      <Container>
        <NavbarBrand href="/">My Tasks</NavbarBrand>
        <Nav>
          <NavItem>
            <Link to="/add" className="btn btn-primary">
              Add Task
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
