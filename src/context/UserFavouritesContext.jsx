import { createContext } from "react";
import { useProvideFavourites } from "../hooks/useProvideFavourites";

const UserFavouritesContext = createContext();

const UserFavouritesProvider = ({ children }) => {
  const favouritesData = useProvideFavourites();
  return <UserFavouritesContext.Provider value={favouritesData}>{children}</UserFavouritesContext.Provider>;
};


export { UserFavouritesProvider, UserFavouritesContext };
