import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [loadingIsOpen, setLoadingIsOpen] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://meetup-app-starter-default-rtdb.firebaseio.com/meetup.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log('Done!');
        setLoadedMeetups(meetups);
        setLoadingIsOpen(false);
      });
  }, []);
  // }, [loadedMeetups]);  //Fetches new data each time it changes. But Infinite Loop.

  if (loadingIsOpen) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meets={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

//My personal way of doing it.
// const [MeetupListIsOpen, setMeetupListIsOpen] = useState(false);
// const meetupData = useMemo(() => [], []);
// useEffect(() => {
//   fetch("https://meetup-app-starter-default-rtdb.firebaseio.com/meetup.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       for (const key in data) {
//         const meetup = {
//           id: key,
//           ...data[key],
//         };
//         meetupData.push(meetup);
//       }
//       setMeetupListIsOpen(true);
//     });
// }, [meetupData]);
