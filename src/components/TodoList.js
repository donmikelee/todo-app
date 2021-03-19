import React from "react";
//Import Components
import Todo from "./Todo";

const TodoList = ({ setTodos, todos, filteredTodos }) => {
  console.log(filteredTodos);
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo 
            setTodos={setTodos} 
            todos={todos} 
            key={todo.id}
            todo={todo}
            text={todo.text}>
            </Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
