import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { ListGroup, Button } from "react-bootstrap";

function TaskList() {
  const [tasks, setTasks] = useContext(TaskContext);
  const colors = ["primary", "secondary", "danger", "warning", "info"];

  const completedTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <ListGroup className="w-50 m-auto mt-3">
            <ListGroup.Item
              variant={colors[Math.floor(Math.random() * colors.length)]}
              className="d-flex justify-content-between align-items-center"
            >
              <h3>{task.task}</h3>
              <div>
                {/* <Button className="btn btn-info text-white mx-3">Edit</Button> */}
                <Button
                  className="btn btn-danger"
                  onClick={() => completedTask(task.id)}
                >
                  Completed
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))
      ) : (
        <h3 className="text-warning">No Tasks Today</h3>
      )}
    </div>
  );
}

export default TaskList;
