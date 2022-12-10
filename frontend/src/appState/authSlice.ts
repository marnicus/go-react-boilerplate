import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../api/client";
import { AuthState } from "./types";

export const authSlice = createSlice({
  name: "counter",
  initialState: {
    status: "",
    authLoading: false,
    user: {},
    authenticated: false,
    error: "",
  } as AuthState,
  reducers: {
    authInit: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.authLoading = true;
    },
    logout: (state) => {
      state.authenticated = false;
      state.user = {};
      state.authLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state, action) => {
        state.status = "loading";
        state.authLoading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.user = action.payload.user;
        state.authenticated = true;
        state.authLoading = false;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
        state.authLoading = false;
      });
  },
});

export const fetchAuth = createAsyncThunk("auth/fetchUser", async () => {
  const response = await client.get("/auth");
  return response.data;
});

// Action creators are generated for each case reducer function
export const { authInit, logout } = authSlice.actions;

export default authSlice.reducer;
