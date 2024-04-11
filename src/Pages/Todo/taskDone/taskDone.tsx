import { observer } from "mobx-react-lite"
import { Todo } from "../../../model"
import { observableTodoStore } from "../../../store/ObservableTodoStore"
import CardLineText from "../cardLineText/cardLineText"
import "./taskDone.css"

const TodoStore = observableTodoStore

const TaskDone: React.FC = () => {
     const colorText = "color-text-task-done"

     const taskDone = TodoStore.taskDone

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