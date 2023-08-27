import classes from "./NoteList.module.css";
import Note from "./Note";
import { useSelector } from "react-redux";

const NoteList = () => {
  const noteList = useSelector((state) => state.noteForm.noteList);
  const sub = useSelector((state) => state.noteFilter.filterSubject);
  const filter = useSelector((state) => state.noteFilter.filter);

  let list;
  if(filter){
    list = noteList.filter((note) => note.subject === sub);
  }
  else{
    list = noteList;
  }
  
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
