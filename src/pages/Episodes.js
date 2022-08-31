import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import Navbar from "../components/navbar";
import { GET_ONE_EPISODE } from "../graphql/getOneEpisode";
import SelectEpisode from "../components/selectEpisode";
import CharacterCard from "../components/characterCard";

const Episodes = () => {
  const [oneEpisode, setOneEpisode] = useState(false);
  const [getEpisode, result] = useLazyQuery(GET_ONE_EPISODE);

  const handleChangeEpisode = (episodeID) => {
    getEpisode({ variables: { episodeId: episodeID } });
  };

  useEffect(() => {
    if (result.data) {
      setOneEpisode(result);
    }
  }, [result, oneEpisode]);

  return (
    <>
      <Navbar />
      <div className=" mt-5 px-5">
        <SelectEpisode
          className="form-select form-select-xs mb-3 mt-5 pt-5"
          aria-label=".form-select-lg example"
          handleChangeEpisode={handleChangeEpisode}
        />
      </div>
      <div>
        {oneEpisode === false ? (
          <h2> Select a epiosde</h2>
        ) : (
          <div>
            <div className=" mt-3 px-5">
              <h2>
                title: <span>{oneEpisode.data.episode.name}</span>
              </h2>
              <h5>episode: {oneEpisode.data.episode.episode}</h5>
              <h5>air date: {oneEpisode.data.episode.air_date}</h5>
            </div>
            <h4 className="mt-5 px-5">Characters in the episode:</h4>
            <div className="d-flex flex-row flex-wrap px-3 ">
              {/*  <div className="col-sm-"> */}
              {oneEpisode.data.episode.characters.map((character) => {
                return (
                  <CharacterCard key={character.id} character={character} />
                );
              })}
              {/*  </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Episodes;
