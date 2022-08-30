import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
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
