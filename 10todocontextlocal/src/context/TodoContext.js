import { createContext, useContext } from "react";

// Create context with default values
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook to use the context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider component
export const TodoProvider = TodoContext.Provider;
