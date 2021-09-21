import React from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./TaskList";
import { TaskProvider } from "./TaskContext";
import AddTask from "./AddTask";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Nav />
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
