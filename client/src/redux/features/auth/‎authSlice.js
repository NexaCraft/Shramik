import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const registerWorker = createAsyncThunk(
  "auth/registerWorker",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/v1/auth/worker/register", userData);
      return res?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Worker registration failed"
      );
    }
  }
);

export const registerEmployer = createAsyncThunk(
  "auth/registerEmployer",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/v1/auth/employer/register", userData);
      return res?.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Employer registration failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ phone, password, userType }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/api/v1/auth/${userType}/login`, {
        phone,
        password,
      });
      return res?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/v1/auth/logout");
      console.log(res)
      return res?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userType: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Registration Reducers
    builder
      .addCase(registerWorker.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerWorker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.userType = "worker";
        state.isAuthenticated = true;
      })
      .addCase(registerWorker.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(registerEmployer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerEmployer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.userType = "employer";
        state.isAuthenticated = true;
      })
      .addCase(registerEmployer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.userType = action.payload.user.role;
        state.isAuthenticated = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.userType = null;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
