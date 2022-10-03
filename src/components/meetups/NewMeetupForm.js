import { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import Modal from "../layout/Modal";
import Backdrop from "../layout/Backdrop";

const NewMeetupForm = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // Highly Important
    setModalIsOpen(true);
  };

  const confirmHandler = (event) => {
    const enteredTitle = titleInputRef.current.value;
    const enteredaddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const newMeetup = {
      title: enteredTitle,
      address: enteredaddress,
      description: enteredDescription,
    };

    props.onAddMeetup(newMeetup);
    setModalIsOpen(false);
  };

  const cancelHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>

      {modalIsOpen && (
        <Modal onConfirm={confirmHandler} onCancel={cancelHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={cancelHandler} />}
    </Card>
  );
};

export default NewMeetupForm;
