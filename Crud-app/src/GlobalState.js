import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Remove task handler
  const removeTask = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id,
    });
  };

  //Add task handler
  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  //Edit Task handler
  const editTask = (task) => {
    dispatch({
      type: "EDIT_TASK",
      payload: task,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ tasks: state.tasks, removeTask, addTask, editTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
