import { TodoList } from './Components/TodoList';
import { observableTodoStore } from './store/ObservableTodoStore';

// import Taskify from './Pages/Taskify';

const App = () => {
  // const a = new ObservableTodoStore()
  // a.fetchTodos();
  // console.log(a.report);


  return (
    <div className="App">
      <TodoList store={observableTodoStore} />
    </div>
  );
}

export default App;
