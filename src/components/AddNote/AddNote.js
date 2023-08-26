import classes from "./AddNote.module.css";
import NoteForm from "./NoteForm";

const AddNote = () => {
  return (
    <div className={classes.addnote}>
      {/* <button>Add Note</button> */}
      <NoteForm/>
    </div>
  );
};

export default AddNote;
