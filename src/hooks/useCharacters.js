import { useState, useEffect } from "react";

const useCharacters = (initPage = 1) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(initPage);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        import.meta.env.VITE_CHARACTERS_URL + "?page=" + currentPage
      );
      const serializedData = await data.json();
      setCharacters(serializedData.results);
      setInfo(serializedData.info);
    })();
  }, [currentPage]);

  return { characters, info, setCurrentPage, currentPage };
};

export { useCharacters };

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
