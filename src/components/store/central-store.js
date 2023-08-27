import { configureStore } from "@reduxjs/toolkit";
import ShowFormReducer from "./note-form";

const store = configureStore({
  reducer: {
    showForm: ShowFormReducer,
  },
});

export default store;
