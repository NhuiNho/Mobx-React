import { observer } from "mobx-react-lite";
import { Todo } from "../model";

interface TodoViewProps {
     todo: Todo;
     handleDone: () => void;
     handleDelete: () => void;
}

export const TodoView: React.FC<TodoViewProps> = observer(({ todo, handleDone, handleDelete }) => {
     const onToggleCompleted = () => {
          todo.isShow = !todo.isShow; // Đảo ngược giá trị của todo.isShow khi checkbox được click
          handleDone(); // Gọi hàm callback handleDone để thông báo rằng todo đã được cập nhật
     }

     const onRename = () => {
          todo.name = prompt('Task name', todo.name) || todo.name
          handleDone()
     }

     const handleDelete1 = () => {
          const confirm = window.confirm("Bạn có chắc muốn xóa?")
          if (confirm) {
               handleDelete()
          }
     }

     return (
          <li onDoubleClick={onRename}>
               <button className="btn btn-danger me-2" onClick={() => handleDelete1()}>Xóa</button>
               <input
                    type='checkbox'
                    checked={todo.isShow}
                    onChange={onToggleCompleted}
               />
               {todo.name}

               {/* {todo.assignee
                    ? <small>{todo.assignee.name}</small>
                    : null
               } */}
               {/* <RenderCounter /> */}
          </li>
     );
})