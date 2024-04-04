import { observer } from "mobx-react-lite";
import { Todo } from "../model";
import { ObservableTodoStore } from "../store/ObservableTodoStore";
import { TodoView } from "./TodoView";

interface TodoListProps {
     store: ObservableTodoStore;
}

export const TodoList: React.FC<TodoListProps> = observer(({ store }) => {
     const onNewTodo = () => {
          const name = prompt("Nhập vào tên việc cần làm", "Việc làm mẫu") || "Việc làm mẫu";
          store.addTodo({
               name: name,
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
               {store.report}
               <ul>
                    {store.todos.map(
                         (todo: Todo, idx: number) => <TodoView todo={todo} key={idx} handleDone={handleTodoUpdate(todo)} handleDelete={handleTodoDelete(todo.id)}/>
                    )}
               </ul>

               <button onClick={() => onNewTodo()}>New Todo</button>
               <small> (double-click a todo to edit)</small>
          </div>
     );
})

