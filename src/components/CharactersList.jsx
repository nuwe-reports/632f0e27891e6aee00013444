import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
let PageSize = 20;

function CharactersList() {
  const { characters, info, setCurrentPage, currentPage, isLoading } =
    useCharacters();

  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  const renderCharacters = () => {
    return characters.map((char) => {
      return isLoading ? (
        <Skeleton count={1} height={200} width={600}/>
      ) : (
        <CharacterCard key={char.id} char={char} />
      );
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
        {characters && renderCharacters()}
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
