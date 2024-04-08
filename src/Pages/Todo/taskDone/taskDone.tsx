import { observer } from "mobx-react-lite"
import { Todo } from "../../../model"
import CardLineText from "../cardLineText/cardLineText"
import "./taskDone.css"

interface TaskDoneProps {
     taskDone: Todo[]
}

const TaskDone: React.FC<TaskDoneProps> = observer(({ taskDone }) => {
     const colorText = "color-text-task-done"

     return (
          <div className="task-done">
               <span className="text-white">Done - {taskDone.length}</span>
               <div className="scroll-task">
                    {taskDone.map((value: Todo, index: number) =>
                         <CardLineText key={index} todo={value} colorText={colorText} />
                    )}

               </div>
          </div>
     )
})

export default TaskDone