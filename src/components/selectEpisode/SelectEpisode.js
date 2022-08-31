import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Select from "react-select";

import { GET_EPISODES } from "../../graphql/getEpisodes";

const SelectEpisode = ({ handleChangeEpisode }) => {
  const [value, setValue] = useState(null);
  const { loading, data } = useQuery(GET_EPISODES);

  const options =
    data &&
    data.episodes.results.map((episode, index) => {
      return { value: index + 1, label: episode.name };
    });

  const handleValueSelect = (value) => {
    setValue(value);
    handleChangeEpisode(value.value);
  };

  return (
    <div className="mt-5 py-2 ">
      <div className="mt-5 py-2 pt-5 ">
        {loading ? (
          <p className="mt-5 pt-4">...loading </p>
        ) : (
          <Select
            value={value}
            options={options}
            onChange={handleValueSelect}
          />
        )}
      </div>
    </div>
  );
};

export default SelectEpisode;
