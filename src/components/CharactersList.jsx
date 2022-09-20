import React from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";

function CharactersList() {
  const charactersData = useGetCharacters();
  return (
    <section>
      <h1>CharactersList</h1>
      <div>
        {charactersData && charactersData.results && charactersData.results.map((char)=>{
            return <span>{char.name}</span>
        })}
      </div>
    </section>
  );
}

export default CharactersList;
