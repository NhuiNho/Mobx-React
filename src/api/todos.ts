import { Todo, Todo1 } from "../model";
import { END_POINT, deleteData, fetchData, postData, updateData } from "./fetchData";

export async function getMenusAPI(): Promise<Todo[]> {
     return new Promise((resolve, reject) => {
          fetchData(`${END_POINT.MENUS}`)
               .then((data) => {
                    resolve(data);
               })
               .catch((error) => {
                    console.error('Error fetching data:', error);
                    reject(error);
               });
     });
}

export function addMenusAPI(data: Todo1) {
     return postData(`${END_POINT.MENUS}`, data);
}

export function updateMenusAPI(id: string, data: Todo) {
     updateData(`${END_POINT.MENUS}/${id}`, data)
          .catch(error => {
               console.error("Error updating todo:", error);
          });
}

export function deleteMenusAPI(id: string) {
     deleteData(`${END_POINT.MENUS}`, id)
          .catch(error => {
               console.error("Error:", error);
          });
}