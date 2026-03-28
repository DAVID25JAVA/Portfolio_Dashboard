import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutLoading: false,
    aboutError: null,
    aboutData: [],
  },
  reducers: {
    setAboutLoading: (state, action) => {
      state.aboutLoading = action.payload;
    },
    setAboutError: (state, action) => {
      state.aboutError = action.payload;
    },
    setAboutData: (state, action) => {
      state.aboutData = action.payload;
    },
  },
});

export const {
  setAboutData,
  setAboutLoading,
  setAboutError,
} = aboutSlice.actions;
export default aboutSlice.reducer;
