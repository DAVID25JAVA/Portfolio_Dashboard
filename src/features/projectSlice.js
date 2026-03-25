import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    loading: false,
    error: null,
    projectData: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setProjectData: (state, action) => {
      state.projectData.push(action.payload);
    },
  },
});

export const { setLoading, setError, setProjectData } = projectSlice.actions;

export default projectSlice.reducer;
