import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "user",
  initialState: { isOpen: false },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// this is for dispatch
export const { toggleModal } = modalSlice.actions;

// this is for configureStore
export default modalSlice.reducer;
