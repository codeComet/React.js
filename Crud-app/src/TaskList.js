import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "./GlobalState";

export const TaskList = () => {
  const { tasks, removeTask } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-3">
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <ListGroupItem
              className="d-flex align-items-center justify-content-between mt-2"
              key={task.id}
            >
              <strong>{task.task}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${task.id}`} className="btn btn-warning mx-2">
                  Edit
                </Link>
                <Button color="danger" onClick={() => removeTask(task.id)}>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Task</h4>
      )}
    </ListGroup>
  );
};
