import React from "react";
import { TodosInterface } from "features/Todo/TodoSlice";
import PropTypes from "prop-types";
import EditForm from "../Form/EditForm";
import DetailForm from "../Form/DetailForm";
import "./HandleList.css";

interface Props {
  data: TodosInterface[];
  clickedList: string;
  handleDelete: (id: any) => Promise<void>;
  handleListClick: (id: any) => Promise<void>;
  handleUpdate: (id: any, todo: {}) => Promise<void>;
}

const HandleList: React.FC<Props> = ({
  data,
  clickedList,
  handleDelete,
  handleListClick,
  handleUpdate
}) => {
  return (
    <>
      {data?.map((todo: TodosInterface, i: number) => (
        <li key={todo.id}>
          {todo.id === clickedList ? (
            <EditForm
              handleListClick={handleListClick}
              todo={todo}
              handleUpdate={handleUpdate}
            />
          ) : (
            <DetailForm
              handleDelete={handleDelete}
              handleListClick={handleListClick}
              todo={todo}
            />
          )}
        </li>
      ))}
    </>
  );
};

HandleList.propTypes = {
  data: PropTypes.array.isRequired,
  clickedList: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleListClick: PropTypes.func.isRequired
};
export default HandleList;
