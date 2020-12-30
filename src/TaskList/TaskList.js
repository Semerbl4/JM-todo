import React from "react";
import ReactDOM from "react-dom";

import "./TaskList.css";

import Task from "../Task/Task";

let TaskList = (props) => (
  <ul className="todo-list">
    <Task className="completed" />
    <Task className="editing" />
    <Task className="completed" />
    <Task className="editing" />
    <Task />
  </ul>
);

export default TaskList;
