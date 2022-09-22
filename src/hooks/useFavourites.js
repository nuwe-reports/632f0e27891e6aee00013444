import { useContext } from "react";
import { UserFavouritesContext } from "../context/UserFavouritesContext";

const useFavourites = () => {
  return useContext(UserFavouritesContext);
};


export {
    useFavourites
}