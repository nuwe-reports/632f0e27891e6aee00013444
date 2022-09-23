import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useGetCharacters } from "../hooks/useGetCharacters";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";

let PageSize = 20;

function CharactersList() {
  const { characters, info } = useGetCharacters();
  const [currentTableData, setCurrentTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentTableData(characters);
  }, [characters]);

  const handlePageChange = async (page) => {
    try {
      setCurrentPage(page);
      const data = await fetch(
        import.meta.env.VITE_CHARACTERS_URL + "?page=" + page
      );
      const serializedData = await data.json();
      setCurrentTableData(serializedData.results);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const renderCharacters = () => {
    return currentTableData.map((char) => {
      return <CharacterCard key={char.id} char={char} />;
    });
  };

  return (
    <section>
      <h1>Characters List</h1>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={info.count || characters.length}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
      <div className="charactersList flex gap-2 justify-center flex-wrap">
        {currentTableData && characters && renderCharacters()}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={info.count || characters.length}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default CharactersList;
