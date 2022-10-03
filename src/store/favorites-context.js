import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite : (favoriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {},
});

//Updates context and provides access to context to all components
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavouriteHandler = (favoriteMeetup) => {
    // setUserFavorites(userFavorites.concat(favoriteMeetup)); Alternative for state updating when depenfd on prev:-
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);   //Passing a function instead of value
    })
  };
  const removeFavouriteHandler = (meetupId) => {
    setUserFavorites( (prevUserFavorites) => {
      return prevUserFavorites.filter(element => element.id !== meetupId);
    });
  };
  const isFavouriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  };
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite : addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    isFavourite: isFavouriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {" "}
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
