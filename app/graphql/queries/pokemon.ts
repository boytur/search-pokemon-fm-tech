import { gql } from '@apollo/client';
import { POKEMON_ATTACK_FIELDS, POKEMON_CORE_FIELDS } from '../fragments/pokemon';

export const GET_POKEMON_BY_NAME = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      ...PokemonCoreFields
    }
  }
  ${POKEMON_CORE_FIELDS}
  ${POKEMON_ATTACK_FIELDS}
`;
