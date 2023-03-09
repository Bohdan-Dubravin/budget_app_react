import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";
export default configureStore({
  reducer: { user: userReducer, modal: modalReducer },
});
