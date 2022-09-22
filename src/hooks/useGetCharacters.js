import { useState } from "react";
import { useEffect } from "react";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState();
  useEffect(() => {
    (async () => {
      const data = await fetch(import.meta.env.VITE_CHARACTERS_URL);
      const serializedData = await data.json();
      setCharacters(serializedData);
    })();
  }, []);
  return characters;
};

export { useGetCharacters };
