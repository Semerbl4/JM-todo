import React from "react";
import ReactDOM from "react-dom";

import "./Task.css";

let completed = (
  <label>
    <span class="description">Completed task</span>
    <span class="created">created 17 seconds ago</span>
  </label>
);

let editing = (
  <label>
    <span class="description">Editing task</span>
    <span class="created">created 5 minutes ago</span>
  </label>
);

let active = (
  <label>
    <span class="description">Active task</span>
    <span class="created">created 5 minutes ago</span>
  </label>
);

let Task = (props) => (
  <li className={props.className}>
    <div className="view">
      <input className="toggle" type="checkbox" />
      {props.className === "editing"
        ? editing
        : props.className === "completed"
        ? completed
        : active}
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
    {props.className === "editing" ? (
      <input type="text" class="edit" value="Editing task"></input>
    ) : null}
  </li>
);

export default Task;
