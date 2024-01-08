import axios from "axios";
import { v4 as uuid } from "uuid";

import { TodoType } from "../type/TodoType";

// i have hard coded the URL since .env was not getting imported

const TODO_API_URL = `https://todo-backend-w6gd.onrender.com`;

export const addTodo = async (todoData: TodoType) => {
  const id = uuid();
  const newTodoData = { ...todoData, id };

  try {
    const res = await axios.post(TODO_API_URL + "/todos", newTodoData);
    return res.data;
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

// an alternate way to do this using fetch
// export const addTodo = async (todoData: TodoType) => {
//   const id = uuid();
//   const newTodoData = { ...todoData, id };

//   try {
//     const res = await fetch(TODO_API_URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTodoData),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data = await res.json();
//     return data;
//   } catch (err) {
//     console.error("Error:", err);
//     throw err;
//   }
// };

export const getTodos = async () => {
  try {
    const res = await axios.get(TODO_API_URL + "/todos");
    return res.data;
  } catch (err) {
    console.log(`err :: ${err}`);
    throw err;
  }
};

export const getTodosByID = async (id: string) => {
  try {
    const res = await axios.get(`${TODO_API_URL}/todos/${id}`);
    return res.data;
  } catch (err) {
    console.log(`err :: ${err}`);
    throw err;
  }
};

export const updateTodo = async (id: string, todoData: TodoType) => {
  console.log(`id : ${id}`);
  console.log(`todoData : ${todoData}`);
  try {
    const res = await axios.put(`${TODO_API_URL}/todos/${id}`, todoData);
    return res.data;
  } catch (err) {
    console.log(`err :: ${err}`);
    throw err;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const res = await axios.delete(`${TODO_API_URL}/todos/${id}`);
    return res.data;
  } catch (err) {
    console.log(`err :: ${err}`);
    throw err;
  }
};
