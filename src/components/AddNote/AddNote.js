import classes from "./AddNote.module.css";
import NoteForm from "./NoteForm";
import { useDispatch, useSelector } from "react-redux";
import { showFormActions } from "../store/note-form";
const AddNote = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showForm.show);
  const showFormHandler = () => {
    dispatch(showFormActions.showForm());
  };
  return (
    <div className={classes.addnote}>
      {!show && <button onClick={showFormHandler}>Add Note</button>}
      {show && <NoteForm />}
    </div>
  );
};

export default AddNote;
