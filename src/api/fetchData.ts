import { Todo, Todo1 } from "../model";

const baseUrl: string | undefined = process.env.REACT_APP_URL_API

export const END_POINT = {
     MENUS: baseUrl + "/Menus",
}

export async function fetchData(url: string) {
     try {
          const response = await fetch(url);

          if (!response.ok) {
               throw new Error('Network response was not ok.');
          }

          const data = await response.json();

          return data;
     } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
     }
}

export async function postData(url: string, data: Todo1) {
     const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
               "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
     });
     return response.json();
}

export async function updateData(url: string, data: Todo) {
     const response = await fetch(url, {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
               "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
     });
     return response.json();
}

export async function deleteData(url: string, id: string) {
     const response = await fetch(`${url}/${id}`, {
          method: "DELETE",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
               "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
     });

     if (!response.ok) {
          throw new Error(`Failed to delete resource with ID ${id}`);
     }
}