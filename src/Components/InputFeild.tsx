import { useRef } from "react";

interface Props {
     todo: string;
     setTodo: React.Dispatch<React.SetStateAction<string>>;
     addTask: () => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, addTask }) => {
     const inputRef = useRef(null)

     return (
          <div className="input-group">
               <input
                    ref={inputRef}
                    className="form-control"
                    placeholder="Nhập vào task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
               />
               <button className="btn btn-primary" onClick={addTask}>Add</button>
          </div>
     )
}

export default InputField