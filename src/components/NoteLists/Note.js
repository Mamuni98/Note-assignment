import classes from "./Note.module.css";
import { useDispatch } from "react-redux";
import { showFormActions } from "../store/note-form";
import { Link } from "react-router-dom";
const Note = (props) => {
  const dispatch = useDispatch();

  const editNoteHandler = () => {
    const editData = {
      id: props.id,
      title: props.title,
      subject: props.subject,
      notes: props.notes,
    };
    dispatch(showFormActions.editNote(editData));
    dispatch(showFormActions.showForm());
  };
  const deleteNoteHandler = () => {
    dispatch(showFormActions.deleteNote(props.id));
  };
  const readNoteHandler = () => {
    const read = {
      title: props.title,
      notes: props.notes,
    };
    dispatch(showFormActions.addNoteRead(read));
  };
  return (
    <li className={classes.list}>
      <Link to={`/${props.id}`} title="Click here to read the note">
        <div className={classes.listcontent} onClick={readNoteHandler}>
          <h3>{props.title}</h3>
          <h4>{props.subject}</h4>
        </div>
      </Link>
      <div className={classes.listbtns}>
        <button onClick={editNoteHandler}>Edit</button>
        <button onClick={deleteNoteHandler}>Delete</button>
      </div>
    </li>
  );
};

export default Note;
