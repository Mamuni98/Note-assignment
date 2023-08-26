import classes from "./AddNote.module.css";
import NoteForm from "./NoteForm";
import Card from "../Card/Card";
const AddNote = () => {
  return (
    <Card className={classes.addnote}>
      {/* <button>Add Note</button> */}
      <NoteForm/>
    </Card>
  );
};

export default AddNote;
