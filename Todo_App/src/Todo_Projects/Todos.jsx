import React from "react";
import Todo from "./Todo";
import "./todos.css";

export default function Todos(props) {
  return (
    <div className="todos_container">
      {props.todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </div>
  );
}
