import { gql } from "@apollo/client";

export const GET_ONE_EPISODE = gql`
  query getEpisodeInfo($episodeId: ID!) {
    episode(id: $episodeId) {
      name
      air_date
      episode
      created
      characters {
        id
        name
        image
        gender
        species
        status
      }
    }
  }
`;
