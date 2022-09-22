import { useState } from "react";

const useProvideFavourites = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (char) => {
    const selectedFavourite = favourites.find((fav) => fav.id === char.id);
    if (!selectedFavourite) {
      //Add to favourites
      setFavourites([...favourites, char]);
      return;
    }
    //Remove from favourites
    setFavourites(favourites.filter((fav) => fav.id !== char.id));
  };

  return {
    favourites,
    toggleFavourite,
  };
};

export { useProvideFavourites };
