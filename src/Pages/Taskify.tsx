import React, { useEffect, useState } from "react";
import InputField from "../Components/InputFeild";
import TodoList from "../Components/TodoList2";
import { addMenusAPI, getMenusAPI } from "../api/todos";
import { Todo } from "../model";

const Taskify: React.FC = () => {
     const [todo, setTodo] = useState<string>("")
     const [todos, setTodos] = useState<Todo[]>([])

     useEffect(() => {
          fetchTodos()
     }, [todos])

     const fetchTodos = async () => {
          const todosData: Todo[] = await getMenusAPI();
          setTodos(todosData);
     }

     const handleAdd = async () => {
          if (todo) {
               await addMenusAPI({
                    name: todo,
                    isShow: false
               });
               setTodo("")
          }
     }

     return (
          <div className="container">
               <div className="row">
                    <div className="col-md-6">
                         <InputField todo={todo} setTodo={setTodo} addTask={handleAdd} />
                         <TodoList todos={todos} setTodos={setTodos} />
                    </div>
               </div>
          </div>
     )
}

export default Taskify