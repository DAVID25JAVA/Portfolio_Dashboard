import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skillError: null,
    skillLoading: false,
    skillData: [],
  },
  reducers: {
    setSkillError: (state, action) => {
      state.skillError = action.payload;
    },
    setSkillLoading: (state, action) => {
      state.skillLoading = action.payload;
    },
    setSkillData: (state, action) => {
      state.skillData = action.payload;
    },
  },
});

export const {
  setSkillData,
  setSkillError,
  setSkillLoading,
} = skillSlice.actions;

export default skillSlice.reducer;
