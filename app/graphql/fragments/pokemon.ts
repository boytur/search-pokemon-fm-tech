import { gql } from '@apollo/client';

export const POKEMON_ATTACK_FIELDS = gql`
  fragment PokemonAttackFields on Attack {
    name
    type
    damage
  }
`;

export const POKEMON_CORE_FIELDS = gql`
  fragment PokemonCoreFields on Pokemon {
    id
    image
    name
    types
    attacks {
      fast {
        ...PokemonAttackFields
      }
      special {
        ...PokemonAttackFields
      }
    }
    evolutions {
      id
      name
      image
    }
  }
`;
