import classes from "./NoteList.module.css";
import Note from "./Note";
import { useSelector } from "react-redux";

const NoteList = () => {
  const list = useSelector((state) => state.noteForm.noteList);
  return (
    <ul className={classes.notelists}>
      {list.map((note) => {
        return (
          <Note
            key={note.id}
            id = {note.id}
            title={note.title}
            subject={note.subject}
            notes={note.notes}
          />
        );
      })}
    </ul>
  );
};

export default NoteList;
