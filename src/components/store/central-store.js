import { configureStore } from "@reduxjs/toolkit";
import NoteFormReducer from "./note-form";

const store = configureStore({
  reducer: {
    noteForm: NoteFormReducer,
  },
});

export default store;
