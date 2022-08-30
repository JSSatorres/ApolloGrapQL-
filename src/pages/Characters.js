import React from "react";
import Navbar from "../components/navbar";
import { useQuery } from "@apollo/client";

import { GET_EPISODES } from "../graphql/rickAndMortyQuery";
import CharacterCard from "../components/characterCard";

const Characters = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);
  const load = loading && <p className="mt-5 pt-4">...loading </p>;

  return (
    <div>
      <Navbar />
      <h3 className="mt-5 pt-4 ">Character Rick and Morty</h3>
      {load}
      <div className="d-flex flex-row flex-wrap px-3">
        {data &&
          data.characters.results.map((character) => {
            return <CharacterCard character={character} />;
          })}
      </div>
      {/* <CharacterCard />; */}
    </div>
  );
};

export default Characters;
