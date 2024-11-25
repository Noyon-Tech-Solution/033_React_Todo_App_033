import React, { useState } from "react";
import "./newtodo.css";

export default function NewTodo(props) {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((previousTodo) => {
      return { ...previousTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <div className="nowtodo_container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <br />
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="todo_btn" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
