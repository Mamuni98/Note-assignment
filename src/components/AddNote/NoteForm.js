import classes from "./NoteForm.module.css";
import { useDispatch } from "react-redux";
import { showFormActions } from "../store/note-form";
import { useRef } from "react";

const NoteForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const subjectRef = useRef();
  const noteRef = useRef();

  const hideFormHandler = () => {
    dispatch(showFormActions.hideForm());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: titleRef.current.value,
      subject: subjectRef.current.value,
      notes: noteRef.current.value,
    };
    console.log(data);
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
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
