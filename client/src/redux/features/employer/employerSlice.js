import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

// --------------------- THUNKS ---------------------

// 1️⃣ Fetch all employers (admin)
export const fetchAllEmployers = createAsyncThunk(
    "employers/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("/api/v1/employers");
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch employers");
        }
    }
);

// 2️⃣ Search employers
export const searchEmployers = createAsyncThunk(
    "employers/search",
    async (queryParams, { rejectWithValue }) => {
        try {
            const { businessName, city, area } = queryParams;
            const query = new URLSearchParams({ businessName, city, area }).toString();
            const res = await axios.get(`/api/v1/employers/search?${query}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Search failed");
        }
    }
);

// 3️⃣ Fetch single employer profile
export const fetchEmployerProfile = createAsyncThunk(
    "employers/fetchProfile",
    async (employerId, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/api/v1/employers/${employerId}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch profile");
        }
    }
);

// 4️⃣ Update logged-in employer profile
export const updateEmployerProfile = createAsyncThunk(
    "employers/updateProfile",
    async (profileData, { rejectWithValue }) => {
        try {
            const res = await axios.put("/api/v1/employers/me", profileData);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Update failed");
        }
    }
);

// --------------------- SLICE ---------------------

const employerSlice = createSlice({
    name: "employers",
    initialState: {
        allEmployers: [],
        searchedEmployers: [],
        employerProfile: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        clearEmployerError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all employers
            .addCase(fetchAllEmployers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllEmployers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allEmployers = action.payload;
            })
            .addCase(fetchAllEmployers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Search employers
            .addCase(searchEmployers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchEmployers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchedEmployers = action.payload;
            })
            .addCase(searchEmployers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Fetch employer profile
            .addCase(fetchEmployerProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEmployerProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.employerProfile = action.payload;
            })
            .addCase(fetchEmployerProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Update profile
            .addCase(updateEmployerProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateEmployerProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.employerProfile = action.payload;
            })
            .addCase(updateEmployerProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { clearEmployerError } = employerSlice.actions;
export default employerSlice.reducer;