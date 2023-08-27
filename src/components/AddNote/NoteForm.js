import classes from "./NoteForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showFormActions } from "../store/note-form";
import { useRef, useEffect } from "react";

const NoteForm = () => {
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.noteForm.editData);
  //console.log(editData);
  const titleRef = useRef();
  const subjectRef = useRef();
  const noteRef = useRef();

  useEffect(() => {
    const objArr = Object.keys(editData);
    if (objArr.length > 0) {
      titleRef.current.value = editData.title;
      subjectRef.current.value = editData.subject;
      noteRef.current.value = editData.notes;
    }
  }, [editData]);

  const hideFormHandler = () => {
    dispatch(showFormActions.hideForm());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: Math.random().toString(),
      title: titleRef.current.value,
      subject: subjectRef.current.value,
      notes: noteRef.current.value,
    };
    if (data.title.length > 0 && data.notes.length > 0) {
      dispatch(showFormActions.addNote(data));
    } else {
      alert("Please fill the title and note field.");
    }

    dispatch(showFormActions.hideForm());
  };
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.form}>
          <div className={classes.control}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title of your note"
              ref={titleRef}
            />
          </div>
          <div className={classes.control}>
            <label>Subject</label>
            <select ref={subjectRef}>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
          <div className={classes.control}>
            <label>Note</label>
            <textarea
              rows="5"
              cols="50"
              placeholder="Add note here..."
              ref={noteRef}
            ></textarea>
          </div>

          <div className={classes.actions}>
            <button type="button" onClick={hideFormHandler}>
              Cancel
            </button>
            <button type="submit">Add Note</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
