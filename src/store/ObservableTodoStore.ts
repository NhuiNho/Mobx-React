import { computed, flow, makeObservable, observable } from "mobx";
import { addMenusAPI, deleteMenusAPI, getMenusAPI, updateMenusAPI } from "../api/todos";
import { Todo, Todo1 } from "../model";

export class ObservableTodoStore {
     todos = observable.array<Todo>([]);

     constructor() {
          makeObservable(this, {
               todos: observable,
               completedTodosCount: computed,
               report: computed,
               addTodo: flow,
               fetchTodos: flow,
               updateTodo: flow,
               deleteTodo: flow
          });
          this.fetchTodos()
     }

     fetchTodos = flow(function* (this: ObservableTodoStore) {
          try {
               const todosData = yield getMenusAPI();
               this.todos.replace(todosData);
          } catch (error) {
               console.error('Error fetching todos:', error);
          }
     })

     get completedTodosCount() {
          return this.todos.filter(
               todo => todo.isShow === true
          ).length;
     }

     get report() {
          if (this.todos.length === 0)
               return "<none>";
          const nextTodo = this.todos.find(todo => todo.isShow === false);

          return `Next todo: "${nextTodo ? nextTodo.name : "<none>"}". ` +
               `Progress: ${this.completedTodosCount}/${this.todos.length}`;
     }

     addTodo = flow(function* (this: ObservableTodoStore, todo: Todo1) {
          try {
               const addedTodo = yield addMenusAPI(todo); // Thêm todo qua API
               this.todos.push(addedTodo); // Thêm todo vào mảng todos
          } catch (error) {
               console.error('Error adding todo:', error);
          }
     });

     updateTodo = flow(function* (this: ObservableTodoStore, todo: Todo) {
          try {
               yield updateMenusAPI(todo.id, todo); // Cập nhật todo qua API
          } catch (error) {
               console.error('Error updating todo:', error);
          }
     });

     deleteTodo = flow(function* (this: ObservableTodoStore, id: string) {
          try {
               yield deleteMenusAPI(id); // Xóa todo qua API
               const index = this.todos.findIndex(todo => todo.id === id);
               if (index !== -1) {
                    this.todos.splice(index, 1); // Xóa todo khỏi mảng todos nếu tìm thấy
               }
          } catch (error) {
               console.error('Error deleting todo:', error);
          }
     });
}

export const observableTodoStore = new ObservableTodoStore();