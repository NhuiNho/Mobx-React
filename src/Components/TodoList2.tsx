import React from "react"
import { Todos } from "../model"
import SingleTodo from "./SingleTodo"

const TodoList: React.FC<Todos> = ({ todos, setTodos }) => {
     return (
          <div>
               <table className="table">
                    <thead>
                         <tr>
                              <th scope="col">Id</th>
                              <th scope="col">Name</th>
                              <th scope="col">isCompleted</th>
                              <th scope="col">Actions</th>
                         </tr>
                    </thead>
                    <tbody>
                         {todos.map((todo, index) => {
                              return (
                                   <SingleTodo
                                        todo={todo}
                                        key={index}
                                        
                                   />
                              )
                         })}
                    </tbody>
               </table>
          </div>
     )
}

export default TodoList