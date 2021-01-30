import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "App.css";
import Todo from "features/Todo/Todo";
import TitleText from "components/Text/TitleText";
import TodoList from "features/Todo/TodoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <TitleText value="Create Todo" />
      <Todo />
      <TitleText value="Todo List" />
      <TodoList />
    </div>
  );
};

export default App;
