import React from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import CharacterCard from "./CharacterCard";

function CharactersList() {
  const characters = useGetCharacters();

  const renderCharacters = () => {
    return characters.results.map((char) => {
      return <CharacterCard key={char.id} char={char} />;
    });
  };

  return (
    <section>
      <h1>Characters List</h1>
      <div className="charactersList flex gap-2 justify-center flex-wrap">
        {characters && characters.results && renderCharacters()}
      </div>
    </section>
  );
}

export default CharactersList;
