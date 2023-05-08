import React, { useState } from "react";
import "./ToDO.css";

export default function ToDos() {
  let id_for_update_title = null;
  let todoIndex = null;

  const [isUpdating, setIsUpdating] = useState(false);

  const mytodolist = [
    {
      id: 1,
      title: "Learn Javascript ",
    },
    {
      id: 2,
      title: "Learn React Js ",
    },
    {
      id: 3,
      title: "Learn Express ",
    },
    {
      id: 4,
      title: "Learn MongoDB ",
    },
  ];
  const [title, setTitle] = useState("");
  const [todolist, settodolist] = useState(mytodolist);

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!isUpdating) {
      settodolist((todolist) => [
        ...todolist,
        { id: Math.round(Math.random() * 100), title: e.target.title.value },
      ]);
      setTitle("");
    } else {
      // console.log(todoIndex);
      // todolist[todoIndex].title = title;
      // settodolist(todolist);
      console.log("Updating ");
    }
  }

  function handleOnChange(e) {
    setTitle((title) => e.target.value);
  }

  function handleUpdateButton(e) {
    setIsUpdating(true);
    id_for_update_title = e.target.value;
    // Here find Index using ID
    todoIndex = todolist.findIndex((todo) => todo.id == id_for_update_title);
    const value = todolist[todoIndex].title;
    setTitle(value);
    console.log("Updating ", value);
  }
  function handleDeleteButton(e) {
    // here filter is used to remove element from arraya using id value ,
    // here remember to use != sign reather than !== for condition comparision
    const id = e.target.value;
    settodolist((todolist) => todolist.filter((todo) => todo.id != id));
  }

  function handleOldToUpdateButton() {}

  return (
    <div className="todo">
      <form onSubmit={handleSubmitForm}>
        <div className="row add-todo-box">
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              value={title}
              name="title"
              onChange={handleOnChange}
              placeholder="Enter Your Todo"
            />
          </div>
          <div className="col-6">
            {!isUpdating ? (
              <button className="btn btn-primary">Add</button>
            ) : (
              <button
                onClick={handleOldToUpdateButton}
                className="btn btn-warning"
              >
                Update
              </button>
            )}
          </div>
        </div>
      </form>

      {todolist.map((todo, index) => {
        return (
          <div className="row todo-list-box">
            <div className="col-10">
              <li key={index}>{todo.title}</li>
            </div>
            <div className="col-1 mt-2">
              <button
                value={todo.id}
                className="btn btn-info"
                onClick={handleUpdateButton}
              >
                Update
              </button>
            </div>
            <div className="col-1 mt-2">
              <button
                value={todo.id}
                className="btn btn-danger"
                onClick={handleDeleteButton}
              >
                Delete {todo.id}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
