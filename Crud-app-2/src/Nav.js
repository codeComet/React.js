import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { TaskContext } from "./TaskContext";

function Nav() {
  const [tasks] = useContext(TaskContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My Tasklist</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-info">
            <strong>
              Total Number of tasks:
              <span className="text-warning"> {tasks.length}</span>
            </strong>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
