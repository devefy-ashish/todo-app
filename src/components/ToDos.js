import React, { useState } from "react";
import "./ToDO.css";

export default function ToDos() {
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
      settodolist((todolist) => [...todolist, { title: e.target.title.value }]);
      setTitle("");
    } else {
      //  const i = e.target.updatelisttiem.value;
      // settodolist((todolist) => [
      //   ...todolist,
      //   (todolist[i] = { title: e.target.title.value }),
      // ]);
    }
  }

  function handleOnChange(e) {
    setTitle((title) => e.target.value);
  }

  function handleUpdateButton(e) {
    setIsUpdating(true);
    const i = e.target.value;
    const value = todolist[i].title;
    setTitle(value);
    console.log("Updating ", value);
  }
  function handleDeleteButton(e) {
    const i = e.target.value;
    settodolist((current) => current.filter((_, index) => index !== i));
  }

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
              <button className="btn btn-warning">Update</button>
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
                value={index}
                className="btn btn-info"
                onClick={handleUpdateButton}
              >
                Update
              </button>
            </div>
            <div className="col-1 mt-2">
              <button
                value={index}
                className="btn btn-danger"
                onClick={handleDeleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
