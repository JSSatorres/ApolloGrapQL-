import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query charactersRickAndMorty {
    characters {
      results {
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
