import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Form.css";
import { TodosInterface } from "features/Todo/TodoSlice";

interface Props {
  todo: TodosInterface;
  handleListClick: (id: string) => Promise<void>;
  handleUpdate: (id: string, todo: {}) => Promise<void>;
}

const EditForm: React.FC<Props> = ({ todo, handleUpdate, handleListClick }) => {
  const [name, setname] = useState(todo.name);
  const [date, setdate] = useState(todo.date);
  const value = useRef({});
  useEffect(() => {
    value.current = {
      name,
      date
    };
  }, [name, date]);
  return (
    <form
      className="edit-form"
      onSubmit={() => handleUpdate(todo.id, value.current)}
    >
      <p className="left label">Name : </p>
      <input
        onChange={e => setname(e.target.value)}
        value={name}
        className="left value"
      />
      <p className="right label">Date : </p>
      <input
        type="date"
        onChange={e => setdate(e.target.value)}
        value={date}
        className="left value"
      />
      <button onClick={() => handleListClick("")}>Cancel</button>
      <button style={{ backgroundColor: "	#ffd400" }} type="submit">
        Submit
      </button>
    </form>
  );
};

EditForm.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleListClick: PropTypes.func.isRequired
};
export default EditForm;
