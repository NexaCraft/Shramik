import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

// --------------------- THUNKS ---------------------

// 1️⃣ Fetch all workers (admin/company)
export const fetchAllWorkers = createAsyncThunk(
  "workers/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/workers");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch workers");
    }
  }
);

// 2️⃣ Search workers
export const searchWorkers = createAsyncThunk(
  "workers/search",
  async (queryParams, { rejectWithValue }) => {
    try {
      const { skill, city, area } = queryParams;
      const query = new URLSearchParams({ skill, city, area }).toString();
      const res = await axios.get(`/api/v1/workers/search?${query}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Search failed");
    }
  }
);

// 3️⃣ Fetch single worker profile
export const fetchWorkerProfile = createAsyncThunk(
  "workers/fetchProfile",
  async (workerId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/v1/workers/${workerId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch profile");
    }
  }
);

// 4️⃣ Update logged-in worker profile
export const updateWorkerProfile = createAsyncThunk(
  "workers/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const res = await axios.put("/api/v1/workers/me", profileData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Update failed");
    }
  }
);

// 5️⃣ Add availability
export const addAvailability = createAsyncThunk(
  "workers/addAvailability",
  async (availabilityData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/v1/workers/availability", availabilityData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to add availability");
    }
  }
);

// 6️⃣ Get worker availability
export const getAvailability = createAsyncThunk(
  "workers/getAvailability",
  async (workerId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/v1/workers/${workerId}/availability`);
      return { workerId, availability: res.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch availability");
    }
  }
);

// --------------------- SLICE ---------------------

const workerSlice = createSlice({
  name: "workers",
  initialState: {
    allWorkers: [],
    searchedWorkers: [],
    workerProfile: null,
    availability: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    clearWorkerError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all workers
      .addCase(fetchAllWorkers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllWorkers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allWorkers = action.payload;
      })
      .addCase(fetchAllWorkers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Search workers
      .addCase(searchWorkers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchWorkers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedWorkers = action.payload;
      })
      .addCase(searchWorkers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch worker profile
      .addCase(fetchWorkerProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWorkerProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workerProfile = action.payload;
      })
      .addCase(fetchWorkerProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update profile
      .addCase(updateWorkerProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateWorkerProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workerProfile = action.payload;
      })
      .addCase(updateWorkerProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Add availability
      .addCase(addAvailability.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        // Save availability for current worker
        state.availability[action.meta.arg.workerId || "me"] = action.payload;
      })
      .addCase(addAvailability.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get availability
      .addCase(getAvailability.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAvailability.fulfilled, (state, action) => {
        state.isLoading = false;
        state.availability[action.payload.workerId] = action.payload.availability;
      })
      .addCase(getAvailability.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearWorkerError } = workerSlice.actions;
export default workerSlice.reducer;