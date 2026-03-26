"use client";
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice";
import socialMediaSlice from '../features/socialMediaSlice';
import skillSlice  from '../features/skillSlice'

const store = configureStore({
  reducer: {
    project: projectSlice,
    social: socialMediaSlice,
    skill:skillSlice
  },
});

export default store;
