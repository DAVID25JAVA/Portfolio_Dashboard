"use client";
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projectSlice";

const store = configureStore({
  reducer: {
    project: projectSlice,
  },
});

export default store;
