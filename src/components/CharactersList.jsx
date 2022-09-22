import React from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import CharacterCard from "./CharacterCard";
import { useFavourites } from "../hooks/useFavourites";

function CharactersList() {
  const characters = useGetCharacters();
  const { favourites, toggleFavourite } = useFavourites();
  const handleToggleFavourite = (char)=>{
    toggleFavourite(char)
  }

  const renderCharacters = () => {
    return characters.results.map((char) => {
      if (favourites.find((fav) => fav.id === char.id)) {
        return <CharacterCard key={char.id} handleToggle={(id)=>handleToggleFavourite(id)} char={char} isFavourite />;
      }
      return <CharacterCard key={char.id} handleToggle={(id)=>handleToggleFavourite(id)} char={char} />;
    });
  };

  return (
    <section>
      <h1>Characters List</h1>
      <div className="charactersList  flex gap-2 justify-center flex-wrap">
        {characters && characters.results && renderCharacters()}
      </div>
    </section>
  );
}

export default CharactersList;
