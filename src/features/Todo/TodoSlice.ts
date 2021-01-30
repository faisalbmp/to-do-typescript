import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodos, readTodos, updateTodos } from "./TodoService";

export const fetchCreateTodo = createAsyncThunk(
  "todo/fetchCreate",
  // if you type your function argument here
  async (data: {}) => {
    return await createTodo(data);
  }
);

export const fetchReadTodos = createAsyncThunk(
  "todo/fetchRead",
  // if you type your function argument here
  async () => {
    return await readTodos();
  }
);

export const fetchUpdateTodos = createAsyncThunk(
  "todo/fetchUpdate",
  // if you type your function argument here
  async (data: any) => {
    return await updateTodos(data);
  }
);

export const fetchDeleteTodos = createAsyncThunk(
  "todo/fetchRead",
  // if you type your function argument here
  async (id: any) => {
    return await deleteTodos(id);
  }
);

export type TodosInterface = {
  id: string;
  name: string;
  date: string;
};

interface TodosState {
  todos: TodosInterface[];
  loading: boolean;
}

const initialState: TodosState = {
  todos: [],
  loading: false
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCreateTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchCreateTodo.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(fetchCreateTodo.rejected, state => {
      state.loading = false;
    });
    builder.addCase(fetchReadTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchReadTodos.fulfilled, (state, payload: any) => {
      state.loading = false;
      state.todos = payload.payload;
    });
    builder.addCase(fetchReadTodos.rejected, state => {
      state.loading = false;
    });
  }
});
export default todoSlice.reducer;
