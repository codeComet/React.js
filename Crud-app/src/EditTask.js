import React, { useContext, useState, useEffect } from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { GlobalContext } from "./GlobalState";
import { Link, useHistory, useParams } from "react-router-dom";

export const EditTask = () => {
  const [selectedTask, setSelectedTask] = useState({
    id: "",
    task: "",
  });
  const { editTask, tasks } = useContext(GlobalContext);
  const id = useParams().id; //get task id

  const history = useHistory();

  useEffect(() => {
    const taskId = id;
    const selectedTask = tasks.find((task) => String(task.id) === taskId);
    setSelectedTask(selectedTask);
  }, [id, tasks]);

  const changeHandler = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    editTask(selectedTask);
    history.push("/");
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label>Task Name</Label>
        <Input
          type="text"
          placeholder="Edit your task"
          className="mt-3 mb-3"
          name="task"
          value={selectedTask.task}
          onChange={changeHandler}
        ></Input>
      </FormGroup>
      <Button type="submit">Edit Task</Button>
      <Link to="/" className="btn btn-danger mx-3">
        Cancel
      </Link>
    </Form>
  );
};
