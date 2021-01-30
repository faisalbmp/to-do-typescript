import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

interface Props {
  todo: {
    id: string;
    name: string;
    date: string;
  };
  handleDelete: (id: string) => Promise<void>;
  handleListClick: (id: string) => Promise<void>;
}

const DetailForm: React.FC<Props> = ({
  todo,
  handleDelete,
  handleListClick
}) => {
  return (
    <>
      <p className="left label">Name : </p>
      <p className="left value">{todo.name}</p>
      <p className="right label">Date : </p>
      <p className="left value">{todo.date} </p>
      <button
        style={{ backgroundColor: "#fe7e0f", color: "#fff" }}
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
      <button
        style={{ backgroundColor: "	#ffd400" }}
        onClick={() => handleListClick(todo.id)}
      >
        Update
      </button>
    </>
  );
};

DetailForm.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleListClick: PropTypes.func.isRequired
};
export default DetailForm;
