import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../hooks/useFavourites";
import CharacterCard from "./CharacterCard";

function FavouritesList() {
  const { favourites, toggleFavourite } = useFavourites();
  const handleToggleFavourite = (char) => {
    toggleFavourite(char);
  };
  const renderCharacters = () => {
    return favourites.map((char) => {
      return (
        <CharacterCard
          key={char.id}
          handleToggle={(id) => handleToggleFavourite(id)}
          char={char}
          isFavourite
        />
      );
    });
  };
  return (
    <section>
      <h1>Favourites List</h1>
      <div className="charactersList  flex gap-2 justify-center flex-wrap">
        {favourites && favourites.length > 0 ? (
          renderCharacters()
        ) : (
          <div>
            <h2>No favourites yet</h2>
            <Link to="/characters">Click here to start adding favourites</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default FavouritesList;
