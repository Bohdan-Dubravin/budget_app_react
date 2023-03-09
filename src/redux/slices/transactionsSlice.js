import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      state.push(todo);
    },
  },
});

// this is for dispatch
export const { addTodo } = transactionsSlice.actions;

// this is for configureStore
export default transactionsSlice.reducer;
