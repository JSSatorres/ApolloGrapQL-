import { gql, useLazyQuery } from "@apollo/client";

export const GET_EPISODE_INFO = gql`
  query getEpisodeInfo($episodeId: ID!) {
    episode(id: $episodeId) {
      name
      air_date
      episode
      created
      characters {
        image
        name
      }
    }
  }
`;
