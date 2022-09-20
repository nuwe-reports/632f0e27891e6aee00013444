import React from "react";
import { useRequireAuth } from "../hooks/useAuth";
import { useGetCharacters } from "../hooks/useGetCharacters";

function CharactersList() {
  const auth = useRequireAuth();
  if (!auth) return <h1>Loading...</h1>;
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
