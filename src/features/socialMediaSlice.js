import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
  name: "socialmedia",
  initialState: {
    loading: false,
    error: null,
    socialMediaData: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSocialMediaData: (state, action) => {
      state.socialMediaData = action.payload;
    },
  },
});

export const { setLoading, setError, setSocialMediaData } = socialSlice.actions;
export default socialSlice.reducer;
