import classes from "./Note.module.css";
import { useDispatch } from "react-redux";
import { showFormActions } from "../store/note-form";
const Note = (props) => {
  const dispatch = useDispatch();
  const editNoteHandler = () => {
   dispatch(showFormActions.editNote(props));
    dispatch(showFormActions.showForm());
  };
  const deleteNoteHandler = () => {
    dispatch(showFormActions.deleteNote(props.id));
  }
  return (
    <li className={classes.list}>
      <div className={classes.listcontent}>
        <h3>{props.title}</h3>
        <h4>{props.subject}</h4>
      </div>
      <div className={classes.listbtns}>
        <button onClick={editNoteHandler}>Edit</button>
        <button onClick={deleteNoteHandler}>Delete</button>
      </div>
    </li>
  );
};

export default Note;
