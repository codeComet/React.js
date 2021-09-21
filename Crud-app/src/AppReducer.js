export const AppReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload;
        }),
      };
    case "ADD_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "EDIT_TASK":
      const newTask = action.payload;
      const updateTask = state.tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else {
          return task;
        }
      });
      return {
        ...state,
        tasks: updateTask,
      };
    default:
      return state;
  }
};
