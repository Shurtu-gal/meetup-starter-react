import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import FavoriteContext from "../../store/favorites-context.js";
import Card from "../ui/Card.js";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  // const navigate = useNavigate();

  const favoriting = useContext(FavoriteContext);

  const itemIsFavorite = favoriting.isFavourite(props.id);

  const toggleButtonHandler = () => {
    if (itemIsFavorite) {
      favoriting.removeFavourite(props.id);
    } else {
      favoriting.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
      });
    }
  };

  const removeButtonHandler = () => {
    fetch("https://meetup-app-starter-default-rtdb.firebaseio.com/meetup/" + props.id + ".json",
    {
      method: 'DELETE',
      headers:{
        'Content-Type' : 'application/json'
      }
    }).then(() => {
      if(itemIsFavorite){
        favoriting.removeFavourite(props.id);
      }
      else{
        
      }
    })
    
  };

  return (
    <Card>
      <li key={props.id} className={classes.item}>
        <div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button onClick={removeButtonHandler}>Remove Meetup</button>
            <button onClick={toggleButtonHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
          </div>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
