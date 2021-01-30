import { todosRef } from "config/firebase";
import { TodosInterface } from "./TodoSlice";

export const createTodo = (item: {}) => {
  return todosRef.push(item);
};

export const readTodos = () => {
  return todosRef.once("value").then(snapshot => {
    const items = snapshot.val();
    const newState = [];
    for (const item in items) {
      newState.push({
        id: item,
        name: items[item].name,
        date: items[item].date
      });
    }
    return newState;
  });
};

// To update data
export const updateTodos = (item: TodosInterface) => {
  return todosRef.child(item.id).set({ ...item });
};
// To delete data
export const deleteTodos = (id: string) => {
  return todosRef.child(id).remove();
};
