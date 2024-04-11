import { action, computed, makeObservable, observable } from "mobx";
import { addMenusAPI, deleteMenusAPI, getMenusAPI, updateMenusAPI } from "../api/todos";
import { Todo } from "../model";

export class ObservableTodoStore {
     todos = observable.array<Todo>([]);

     constructor() {
          makeObservable(this, {
               todos: observable,
               completedTodosCount: computed,
               taskTodo: computed,
               taskDone: computed,
               addTodo: action,
               fetchTodos: action,
               updateTodo: action,
               deleteTodo: action,
          });
          this.fetchTodos()
     }

     async fetchTodos() {
          try {
               const todosData = await getMenusAPI();
               this.todos.replace(todosData);
          } catch (error) {
               console.error('Error fetching todos:', error);
          }
     }

     get taskTodo() {
          return this.todos.filter(
               todo => !todo.isShow
          )
     }

     get taskDone() {
          return this.todos.filter(
               todo => todo.isShow
          )
     }

     get completedTodosCount() {
          return this.todos.filter(
               todo => todo.isShow === true
          ).length;
     }

     async addTodo(todo: Todo) {
          try {
               const addedTodo = await addMenusAPI(todo); // Thêm todo qua API
               this.todos.push(addedTodo); // Thêm todo vào mảng todos
          } catch (error) {
               console.error('Error adding todo:', error);
          }
     }

     async updateTodo(todo: Todo) {
          try {
               await updateMenusAPI(todo.id, todo); // Cập nhật todo qua API
          } catch (error) {
               console.error('Error updating todo:', error);
          }
     }

     async deleteTodo(id: string) {
          try {
               await deleteMenusAPI(id); // Xóa todo qua API
               const index = this.todos.findIndex(todo => todo.id === id);
               if (index !== -1) {
                    this.todos.splice(index, 1); // Xóa todo khỏi mảng todos nếu tìm thấy
               }
          } catch (error) {
               console.error('Error deleting todo:', error);
          }
     }
}

export const observableTodoStore = new ObservableTodoStore();