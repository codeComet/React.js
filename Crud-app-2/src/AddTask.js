import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { TaskContext } from "./TaskContext";
import { v4 as uuidv4 } from "uuid";

function AddTask() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useContext(TaskContext);
  console.log(tasks);
  const updateName = (e) => {
    setName(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks((prevTask) => [...prevTask, { task: name, id: uuidv4() }]);
    setName("");
  };
  return (
    <div>
      <Form
        className="d-flex align-items-center justify-content-center w-50 m-auto my-5"
        onSubmit={addTask}
      >
        <input
          type="text"
          placeholder="Enter your task"
          value={name}
          name="task"
          onChange={updateName}
          style={{
            width: "80%",
            height: "2.7em",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
          }}
          required
        />
        <Button className="btn btn-primary mx-3" size="lg" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  );
}

export default AddTask;
