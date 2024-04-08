import TodoApp from "./Pages/Todo/TodoApp";
import { observableTodoStore } from "./store/ObservableTodoStore";


const App = () => {
  return (
    <div className="App">
      <TodoApp store={observableTodoStore} />
    </div>
  );
}

export default App;
