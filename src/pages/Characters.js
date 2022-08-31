import React from "react";
import Navbar from "../components/navbar";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../graphql/getCharacrters";
import CharacterCard from "../components/characterCard";

const Characters = () => {
  const { loading, data } = useQuery(GET_CHARACTERS);
  const load = loading && <p className="mt-5 pt-4">...loading </p>;

  return (
    <div>
      <Navbar />
      <h3 className="mt-5 pt-4 px-4">All Characters Rick and Morty</h3>
      {load}
      <div className="d-flex flex-row flex-wrap px-3">
        {data &&
          data.characters.results.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
          })}
      </div>
    </div>
  );
};

export default Characters;
