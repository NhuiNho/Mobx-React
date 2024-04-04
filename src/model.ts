export interface Todo1 {
     name: string;
     isShow: boolean;
}

export interface Todo {
     id: string;
     name: string;
     isShow: boolean;
}

export interface Todos {
     todos: Todo[];
     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}