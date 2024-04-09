import { observer } from "mobx-react-lite"
import React from "react"
import { Todo } from "../../model"
import { ObservableTodoStore } from "../../store/ObservableTodoStore"
import "./TodoApp.css"
import TaskDone from "./taskDone/taskDone"
import TaskTodo from "./taskTodo/taskTodo"
import TodoInput from "./todoInput/todoInput"

interface TodoListProps {
     store: ObservableTodoStore;
}

const TodoApp: React.FC<TodoListProps> = observer(({ store }) => {


     const onNewTodo = (todoName: string) => {
          store.addTodo({
               id: "a",
               name: todoName,
               isShow: false
          })
     }

     const handleTodoUpdate = (todo: Todo) => {
          return () => {
               store.updateTodo(todo); // Gọi hàm updateTodo của store khi todo được thay đổi
          };
     };

     const handleTodoDelete = (id: string) => {
          return () => {
               store.deleteTodo(id);
          }
     }

     return (
          <div>
               <div className="TodoApp">
                    <div className="container">
                         <TodoInput onAddTodo={(todoName) => onNewTodo(todoName)} />

                         <TaskTodo taskTodo={store.taskTodo} onUpdateTodo={(todo) => handleTodoUpdate(todo)} onDeleteTodo={(id) => handleTodoDelete(id)} />

                         <TaskDone taskDone={store.taskDone} />
                    </div>
               </div>
          </div>
     )
})

export default TodoApp