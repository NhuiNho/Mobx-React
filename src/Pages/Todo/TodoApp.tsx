import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { Todo } from "../../model"
import { ObservableTodoStore } from "../../store/ObservableTodoStore"
import "./TodoApp.css"
import TaskDone from "./taskDone/taskDone"
import CardLineTodo from "./taskTodo/cardLineTodo"

interface TodoListProps {
     store: ObservableTodoStore;
}

const TodoApp: React.FC<TodoListProps> = observer(({ store }) => {
     const [inputValue, setInputValue] = useState("")
     const colorText = "color-text-task-todo"

     const onNewTodo = () => {
          store.addTodo({
               id: "a",
               name: inputValue,
               isShow: false
          })
          setInputValue("")
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
                         <div className="inner-container">
                              <div className="addNew">
                                   <input type="text" className="inputNew" placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                   <button type="button" className="buttonNew" onClick={() => onNewTodo()} disabled={inputValue === ""}>
                                        <span>
                                             <svg width="40" height="40" viewBox="0 0 50 36" fill="none"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H15V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
                                                       fill="white" />
                                             </svg>
                                        </span>
                                   </button>
                              </div>
                              <div className="task-to-do">
                                   <span className="text-white">Tasks todo - {store.taskTodo.length}</span>
                                   <div className="scroll-task">
                                        {store.taskTodo.map((value: Todo, index: number) =>
                                             <CardLineTodo key={index} todo={value} colorText={colorText} handleDone={handleTodoUpdate(value)} handleDelete={handleTodoDelete(value.id)} />)}
                                   </div>
                              </div>
                              <TaskDone taskDone={store.taskDone} />
                         </div>
                    </div>
               </div>
          </div>
     )
})

export default TodoApp