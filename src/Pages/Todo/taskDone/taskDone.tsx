import { observer } from "mobx-react-lite"
import { Todo } from "../../../model"
import { observableTodoStore } from "../../../store/ObservableTodoStore"
import CardLineText from "../cardLineText/cardLineText"
import "./taskDone.css"

const TodoStore = observableTodoStore

const TaskDone: React.FC = () => {
     const colorText = "color-text-task-done"

     const taskDone = TodoStore.taskDone

     // const sortedTaskTodo = taskDone.sort((a: Todo, b: Todo) => {
     //      // Sử dụng phương thức getTimestamp() của ObjectId để lấy thời gian tạo
     //      const timeA = a.id.getTimestamp().getTime();
     //      const timeB = b.id.getTimestamp().getTime();

     //      // So sánh thời gian tạo của các đối tượng để xác định thứ tự sắp xếp
     //      return timeA - timeB;
     //  });

     return (
          <div className="task__done_todoapp">
               <span className="text__task_done_todoapp">Done - {taskDone.length}</span>
               <div className="scroll-task">
                    {taskDone.map((value: Todo, index: number) =>
                         <CardLineText key={index} todo={value} colorText={colorText} />
                    )}
               </div>
          </div>
     )
}

export default observer(TaskDone)