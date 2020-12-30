import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import Tast from "../Task/Task";

let App = () => (
  <section className="todoapp">
    <NewTaskForm />
    <TaskList />
    <Footer />
  </section>
);

export default App;
