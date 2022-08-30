import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes {
    episodes {
      results {
        name
        episode
      }
    }
  }
`;
