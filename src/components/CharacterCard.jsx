import { useNavigate } from "react-router-dom";
import React from "react";
import LikeIcon from "../icons/Like";
import { useFavourites } from "../hooks/useFavourites";

function CharacterCard({ char }) {
  const navigate = useNavigate();
  const {checkIsFavourite, toggleFavourite} = useFavourites()
  const handleClick = (id) => {
    navigate(`/characters/${id}`);
  };

  const handleToggleFav = (e) => {
    e.stopPropagation();
    toggleFavourite(char);
  };

  const charStatusClassName =
    char.status === "Alive"
      ? "text-green-600"
      : char.status === "Dead"
      ? "text-red-600"
      : "";
  return (
    <>
      {char && (
        <div
          onClick={() => handleClick(char.id)}
          className="character flex-col sm:flex-row h-auto bg-blue-300 rounded-lg p-4 flex"
          key={char.id}
        >
          <div className="imageWrapper">
            <img className="w-full h-full" src={char.image}></img>
          </div>
          <div className="contentWrapper flex flex-col items-start p-2">
            <div className="flex justify-center items-center">
              <h3>{char.name}</h3>
              <button
                className="w-min bg-inherit border-none m-0"
                onClick={handleToggleFav}
              >
                <LikeIcon isActive={checkIsFavourite(char)} />
              </button>
            </div>
            <p>
              <strong>Status: </strong>
              <span className={charStatusClassName}>{char.status}</span>
            </p>
            <p>
              <strong>Last know location: </strong>
              <span>{char.location.name}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterCard;
