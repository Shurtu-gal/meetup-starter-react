import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../store/favorites-context";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const currFavorites = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <h1>React Meetups</h1>
            <li>
              <Link to={'/favorites'}>My Favorites <span className={classes.notif}>{currFavorites.totalFavorites} </span></Link>
            </li>
            <li>
              <Link to={'/new-meetup'}>Add New Meetup</Link>
            </li>
            <li>
              <Link to={'/'}>All Meetups</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
