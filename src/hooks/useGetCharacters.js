import { useState, useEffect } from "react";

const useGetCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(import.meta.env.VITE_CHARACTERS_URL);
      const serializedData = await data.json();
      setCharacters(serializedData.results);
      setInfo(serializedData.info);
    })();
  }, []);
  return {characters,info};
};

export { useGetCharacters };



// const useGetCharacters = () => {
//   const [characters, setCharacters] = useState([]);
//   useEffect(() => {
//     (async () => {
//       const data = await fetch(import.meta.env.VITE_CHARACTERS_URL);
//       const serializedData = await data.json();
//       setCharacters(serializedData.results);
//     })();
//   }, []);
//   return characters;
// };