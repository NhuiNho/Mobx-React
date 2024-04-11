import { observer } from "mobx-react-lite"
import React from "react"
import "./TodoApp.css"
import TaskDone from "./taskDone/taskDone"
import TaskTodo from "./taskTodo/taskTodo"
import TodoInput from "./todoInput/todoInput"

const TodoApp: React.FC = () => {


     return (
          <div>
               <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
               <div className="body_todoapp">
                    <div className="container_todoapp">
                         <div className="inner__container_todoapp">
                              <TodoInput />

                              <TaskTodo />

                              <TaskDone />
                         </div>

                    </div>
               </div>
          </div>
     )
}

export default observer(TodoApp)