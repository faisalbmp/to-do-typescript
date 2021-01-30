import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "rootReducer";
import {
  fetchDeleteTodos,
  fetchReadTodos,
  fetchUpdateTodos
} from "./TodoSlice";
import "./TodoList.css";
import HandleList from "features/components/List/HandleList";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todo);
  const [clickedList, setClickedList] = useState("");
  useEffect(() => {
    dispatch(fetchReadTodos());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    await dispatch(fetchDeleteTodos(id));
    await dispatch(fetchReadTodos());
  };

  const handleUpdate = async (id: string, todo: {}) => {
    const body = {
      id,
      ...todo
    };
    await dispatch(fetchUpdateTodos(body));
    await dispatch(fetchReadTodos());
  };

  const handleListClick = async (id: string) => {
    setClickedList(id);
  };
  return (
    <ul>
      <HandleList
        clickedList={clickedList}
        data={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        handleListClick={handleListClick}
      />
    </ul>
  );
};

export default TodoList;
