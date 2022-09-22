import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharactersDetails } from "../hooks/useGetCharacterDetails";
import { useGetEpisode } from "../hooks/useGetEpisode";

function CharacterDetail() {
  const { id } = useParams();
  const char = useGetCharactersDetails(id);
  const episode = useGetEpisode(char?.episode[0])
  console.log(char)
  return (
    <section>
      <h1>Character Details</h1>
      {char && episode && (
        <div
          className="characterDetails bg-blue-300 rounded-lg p-4 flex"
          key={char.id}
        >
          <div className="imageWrapper">
            <img className="w-full h-full" src={char.image}></img>
          </div>
          <div className="contentWrapper flex flex-col items-start p-2">
            <h3>{char.name}</h3>
            <p>
              <strong>Status: </strong>
              <span>{char.status}</span>
            </p>
            <p>
              <strong>Species: </strong>
              <span>{char.species}</span>
            </p>
            <p>
              <strong>Gender: </strong>
              <span>{char.gender}</span>
            </p>
            <p>
              <strong>First Seen In: </strong>
              <span>{episode?.name} </span>
              <small>({episode?.episode})</small>
            </p>
            <p>
              <strong>Last know location: </strong>
              <span>{char.location.name}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CharacterDetail;
