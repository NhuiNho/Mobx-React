import React, { useState } from "react";
import "./todoInput.css";

interface TodoInputProps {
     onAddTodo: (todoName: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
     const [inputValue, setInputValue] = useState("");

     const handleAddTodo = () => {
          if (inputValue.trim() !== "") {
               onAddTodo(inputValue.trim());
               setInputValue("");
          }
     };

     return (
          <div className="addNew">
               <input
                    type="text"
                    className="inputNew"
                    placeholder="Add a new task"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
               />
               <button
                    type="button"
                    className="buttonNew"
                    onClick={handleAddTodo}
                    disabled={inputValue.trim() === ""}
               >
                    <span>
                         <svg width="40" height="40" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                   d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H15V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
                                   fill="white"
                              />
                         </svg>
                    </span>
               </button>
          </div>
     );
};

export default TodoInput;
