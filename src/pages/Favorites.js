import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/favorites-context";

function FavoritesPage() {
  const currFavorites = useContext(FavoriteContext);

  let content;
  if(currFavorites.totalFavorites === 0){
    content = <p>You have got no favorites yet. Start to add some then you will get sth.</p>
  }else{
    content = <MeetupList meets = {currFavorites.favorites} />
  }

  return <section>
    <h1>My Favorite meetups</h1>
    {content}
  </section>;
}

export default FavoritesPage;
