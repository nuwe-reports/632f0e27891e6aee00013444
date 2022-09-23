import React from "react";
import { useParams } from "react-router-dom";
import { useFavourites } from "../hooks/useFavourites";
import { useGetCharactersDetails } from "../hooks/useGetCharacterDetails";
import { useGetEpisode } from "../hooks/useGetEpisode";
import LikeIcon from "../icons/Like";

function CharacterDetail() {
  const { id } = useParams();
  const char = useGetCharactersDetails(id);
  const episode = useGetEpisode(char?.episode[0]);
  const { favourites, toggleFavourite } = useFavourites();
  const charStatusClassName =
    char?.status === "Alive"
      ? "text-green-600"
      : char?.status === "Dead"
      ? "text-red-600"
      : "";
  const isFavourite = favourites.find((fav) => fav.id === Number(id));
  return (
    <section>
      <h1>Character Details</h1>
      {char && episode && (
        <div
          className="characterDetails sm:max-h-96 flex-col sm:flex-row bg-blue-300 rounded-lg p-4 flex"
          key={char.id}
        >
          <div className="imageWrapper">
            <img className="w-full h-full" src={char.image}></img>
          </div>
          <div className="contentWrapper flex flex-col items-start p-2">
            <div className="flex justify-center items-center">
              <h3 className="mb-0">{char.name}</h3>
              <button
                className="w-min bg-inherit border-none m-0"
                onClick={() => toggleFavourite(char)}
              >
                <LikeIcon isActive={isFavourite} />
              </button>
            </div>
            <p>
              <strong>Status: </strong>
              <span className={charStatusClassName}>{char.status}</span>
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
