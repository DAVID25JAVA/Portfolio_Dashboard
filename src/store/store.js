"use client";
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice";
import socialMediaSlice from '../features/socialMediaSlice';

const store = configureStore({
  reducer: {
    project: projectSlice,
    social:socialMediaSlice
  },
});

export default store;
