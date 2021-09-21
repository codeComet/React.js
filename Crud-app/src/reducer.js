export const initialState = {
  tasks: [
    { id: 1, task: "Task One" },
    { id: 2, task: "Task Two" },
  ],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [{ id: action.tasks.id, task: action.tasks.task }],
      };

    default:
      return state;
  }
};
