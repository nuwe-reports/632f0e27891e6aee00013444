import React from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import CharacterCard from "./CharacterCard";
import { useFavourites } from "../hooks/useFavourites";

function CharactersList() {
  const {characters,setCharacters} = useGetCharacters();
  const { favourites, toggleFavourite } = useFavourites();
  const handleToggleFavourite = (char)=>{
    console.log("tusa",char)
    console.log("favourites",favourites)
    toggleFavourite(char)
    //Force to rerender to update changes and renderCharacters executes again
    setCharacters({...characters})
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
