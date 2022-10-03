import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addMeetuphandler = (newMeetup) => {
    fetch(
      "https://meetup-app-starter-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetup),
        headers: {
          "Content-Type": "application/json",
        }
      }
    ).then(
      () => {
        navigate("/");
      },
      () => {
        console.log("Error");
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </section>
  );
}

export default NewMeetupPage;
