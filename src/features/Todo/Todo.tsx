import React, { useState } from "react";
import "./Todo.css";
// import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { fetchCreateTodo, fetchReadTodos } from "./TodoSlice";

const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const createTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const item = {
      name: name,
      date: date
    };
    await dispatch(fetchCreateTodo(item));
    await dispatch(fetchReadTodos());

    setname("");
    setdate("");
  };
  return (
    <form className="create-form" onSubmit={createTodo}>
      <div className="form-group">
        <label>Name</label>
        <input value={name} onChange={e => setname(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={e => setdate(e.target.value)}
        />
      </div>

      <button
        style={{ backgroundColor: "#87c830", color: "#fff" }}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default Todo;
