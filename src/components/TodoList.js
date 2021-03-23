import React from "react";
//Import Components
import Todo from "./Todo";
import { Draggable } from 'react-beautiful-dnd';


const TodoList = ({ setTodos, todos, filteredTodos }) => {
  // console.log(filteredTodos);
  // console.log(todos);
  // console.log(TodoList);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, i) => (
          <Draggable key={todo.id} draggableId={'draggable-' + todo.id} index={i}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef}{...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                <Todo 
                setTodos={setTodos} 
                todos={todos} 
                key={todo.id}
                todo={todo}
                text={todo.text}>
              </Todo>
              </div>
              )}
          </Draggable>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
