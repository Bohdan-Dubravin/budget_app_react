import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "register",
  async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        credentials
      );
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk("login", async (credentials) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      credentials
    );
    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      displayedName: null,
      avatarUrl: null,
      currencyFormat: null,
      email: null,
      id: null,
      currency: null,
      totalMonthBudget: null,
    },
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      state.push(todo);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = {
        ...action.payload,
        currencyFormat: action.payload.currencyFormat || "US Dollar $",
        currency: action.payload.currencyFormat?.split(" ")[0] || "$",
        totalMonthBudget: action.payload.TotalMonthBudget,
      };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = {
        ...action.payload,
        currencyFormat: action.payload.currencyFormat || "US Dollar $",
        currency: action.payload.currencyFormat?.split(" ")[0] || "$",
        totalMonthBudget: action.payload.TotalMonthBudget,
      };
    });
  },
});

// this is for dispatch
export const { addTodo } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
