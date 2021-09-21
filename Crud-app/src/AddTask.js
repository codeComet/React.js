import React, { useContext, useState } from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { GlobalContext } from "./GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const AddTask = () => {
  const [inputVal, setInputVal] = useState("");

  const { addTask } = useContext(GlobalContext);

  const history = useHistory();

  const setTask = (e) => {
    setInputVal(e.target.value);
  };

  const submitHandler = () => {
    const newTask = {
      id: uuidv4(),
      task: inputVal,
    };

    addTask(newTask);
    history.push("/");
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label>Task Name</Label>
        <Input
          type="text"
          placeholder="Enter your task"
          className="mt-3 mb-3"
          value={inputVal}
          onChange={setTask}
        ></Input>
      </FormGroup>
      <Button type="submit">ADD</Button>
      <Link to="/" className="btn btn-danger mx-3">
        Cancel
      </Link>
    </Form>
  );
};
