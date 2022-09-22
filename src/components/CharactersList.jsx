import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetCharacters } from "../hooks/useGetCharacters";

function CharactersList() {
  const charactersData = useGetCharacters();
  const navigate = useNavigate()
  const handleClick = (id)=> {
    navigate(`/${id}`)
  }
  return (
    <section>
      <h1>Characters List</h1>
      <div className="charactersList  flex gap-2 justify-center flex-wrap">
        {charactersData &&
          charactersData.results &&
          charactersData.results.map((char) => {
            const charStatus =
              char.status === "Alive"
                ? "text-green-600"
                : char.status === "Dead"
                ? "text-red-600"
                : "";
            return (
              <div
                onClick={()=>handleClick(char.id)}
                className="character bg-blue-300 rounded-lg p-4 flex"
                key={char.id}
              >
                <div className="imageWrapper">
                  <img className="w-full h-full" src={char.image}></img>
                </div>
                <div className="contentWrapper flex flex-col items-start p-2">
                  <h3>{char.name}</h3>
                  <p>
                    <strong>Status: </strong>
                    <span className={charStatus}>{char.status}</span>
                  </p>
                  <p>
                    <strong>Last know location: </strong>
                    <span>{char.location.name}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default CharactersList;
