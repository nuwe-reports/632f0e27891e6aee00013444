import { useState, useEffect } from "react";

const useGetCharactersDetails = (id) => {
  const [character, setCharacter] = useState();
  useEffect(() => {
    (async () => {
      const data = await fetch(import.meta.env.VITE_CHARACTERS_URL + "/" + id);
      const serializedData = await data.json();
      setCharacter(serializedData);
    })();
  }, []);
  return character;
};

export { useGetCharactersDetails };
