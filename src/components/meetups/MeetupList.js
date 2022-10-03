import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css'

// function MeetupList(props) { // Always use const everywhere or states.
const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meets.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            //or as meetup ={meetup}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
