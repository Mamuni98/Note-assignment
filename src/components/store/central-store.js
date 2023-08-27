import { configureStore } from "@reduxjs/toolkit";
import NoteFormReducer from "./note-form";
import NoteFilterReducer from "./note-filter";
const store = configureStore({
  reducer: {
    noteForm: NoteFormReducer,
    noteFilter: NoteFilterReducer,
  },
});

export default store;
