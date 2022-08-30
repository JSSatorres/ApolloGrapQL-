import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";

import Navbar from "../components/navbar";
import { GET_EPISODE_INFO } from "../graphql/episodeInfoQuery";
import SelectEpisode from "../components/selectEpisode";

const Episodes = () => {
  /* const load = loading && <p className="mt-5 pt-4">...loading </p>; */
  /* const [getEpisode, result] = useLazyQuery(GET_EPISODE_INFO); */

  const handleChangeEpisode = (episodeID) => {
    console.log(episodeID);
  };
  return (
    <>
      <Navbar />
      <div>
        <SelectEpisode
          className="form-select form-select-xs mb-3 mt-5 pt-5"
          aria-label=".form-select-lg example"
          handleChangeEpisode={handleChangeEpisode}
        />
      </div>
      {/*  <select
        class="form-select form-select-xs mb-3 mt-5 pt-5"
        aria-label=".form-select-lg example"
      >
        {load}
        <option selected>select a episode</option>
        {data &&
          data.episodes.results.map((episode, index) => {
            return (
              <option value={index} onClick={(e) => handleChangeEpisode(e)}>
                {" "}
                {episode.name} - {episode.episode}
              </option>
            );
          })}
      </select> */}
      <div className="bg-secondary"> episodes</div>
    </>
  );
};

export default Episodes;
