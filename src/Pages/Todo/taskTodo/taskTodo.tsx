import { observer } from "mobx-react-lite";
import { Todo } from "../../../model";
import { observableTodoStore } from "../../../store/ObservableTodoStore";
import CardLineTodo from "./cardLineTodo";
import "./taskTodo.css";

const TodoStore = observableTodoStore

const TaskTodo: React.FC = () => {
     const colorText = "color-text-task-todo"

     const taskTodo = TodoStore.taskTodo

     return (
          <div className="task__todo_todoapp">
               <span className="text__task_todo_todoapp">Tasks todo - {taskTodo.length}</span>
               <div className="scroll-task">
                    {taskTodo.map((value: Todo, index: number) =>
                         <CardLineTodo key={index} todo={value} colorText={colorText} />)}
               </div>
          </div>
     )
}

export default observer(TaskTodo)