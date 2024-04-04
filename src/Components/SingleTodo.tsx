import { FaEdit } from "react-icons/fa";
import { IoCloudDone } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { deleteMenusAPI, updateMenusAPI } from "../api/todos";
import { Todo } from "../model";

type Props = {
     todo: Todo,
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
     const handleDone = async (id: string) => {
          // await updateMenusAPI({
          //      ...todo,
          //      isShow: !todo.isShow
          // })
     }

     const handleDelete = async (id: string) => {
          const confirm = window.confirm("Bạn có chắc muốn xóa ?")
          if (confirm) {
               await deleteMenusAPI(id)
          }
     }

     return (
          <>
               <tr>
                    <th scope="row">{todo.id}</th>
                    <td>{todo.name}</td>
                    <td>{todo.isShow ? "true" : "false"}</td>
                    <td>
                         <button className="me-3" onClick={() => handleDone(todo.id)} ><IoCloudDone /></button>
                         <FaEdit className="me-3" />
                         <button onClick={() => handleDelete(todo.id)}><MdDelete /></button>
                    </td>
               </tr>
          </>
     )
}

export default SingleTodo