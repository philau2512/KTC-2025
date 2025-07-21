import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";

import type { AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const login = createAsyncThunk<
  void,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  const { email, password } = credentials;
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "123456") {
        resolve();
      } else {
        reject(rejectWithValue("Invalid credentials"));
      }
    }, 1000);
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export default authSlice.reducer;
