import { Todo } from "../../../model";
import CardLineTodo from "./cardLineTodo";

interface TaskTodoProps {
     taskTodo: Todo[];
     onUpdateTodo: (todo: Todo) => () => void;
     onDeleteTodo: (id: string) => () => void;
}

const TaskTodo: React.FC<TaskTodoProps> = ({ taskTodo, onUpdateTodo, onDeleteTodo }) => {
     const colorText = "color-text-task-todo"

     return (
          <div className="task-to-do">
               <span className="text-white">Tasks todo - {taskTodo.length}</span>
               <div className="scroll-task">
                    {taskTodo.map((value: Todo, index: number) =>
                         <CardLineTodo key={index} todo={value} colorText={colorText} onDone={onUpdateTodo(value)} onDelete={onDeleteTodo(value.id)} />)}
               </div>
          </div>
     )
}

export default TaskTodo