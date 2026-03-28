"use client";
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice";
import socialMediaSlice from "../features/socialMediaSlice";
import skillSlice from "../features/skillSlice";
import aboutSlice from "../features/about";

const store = configureStore({
  reducer: {
    project: projectSlice,
    social: socialMediaSlice,
    skill: skillSlice,
    about: aboutSlice,
  },
});

export default store;
