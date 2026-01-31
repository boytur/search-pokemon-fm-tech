import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing/react';
const MockedProviderNew = MockedProvider;


import { GET_POKEMON_BY_NAME } from '../app/graphql/queries/pokemon';
import { PokemonSearch } from '../app/components/pokemon-search';

const Home = PokemonSearch;

const mocks = [
    {
        request: {
            query: GET_POKEMON_BY_NAME,
            variables: { name: 'Bulbasaur' },
        },
        result: {
            data: {
                pokemon: {
                    __typename: 'Pokemon',
                    id: '001',
                    name: 'Bulbasaur',
                    types: ['Grass', 'Poison'],
                    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
                    attacks: {
                        __typename: 'Attacks',
                        fast: [{ __typename: 'Attack', name: 'Tackle', type: 'Normal', damage: 12 }],
                        special: [{ __typename: 'Attack', name: 'Vine Whip', type: 'Grass', damage: 45 }],
                    },
                    evolutions: [
                        { __typename: 'Pokemon', id: '002', name: 'Ivysaur', image: 'ivysaur.jpg' }
                    ]
                },
            },
        },
    },
    {
        request: {
            query: GET_POKEMON_BY_NAME,
            variables: { name: 'Charmander' },
        },
        result: {
            data: {
                pokemon: {
                    __typename: 'Pokemon',
                    id: '004',
                    name: 'Charmander',
                    types: ['Fire'],
                    image: 'https://img.pokemondb.net/artwork/charmander.jpg',
                    attacks: {
                        __typename: 'Attacks',
                        fast: [{ __typename: 'Attack', name: 'Scratch', type: 'Normal', damage: 10 }],
                        special: [{ __typename: 'Attack', name: 'Ember', type: 'Fire', damage: 40 }],
                    },
                    evolutions: [
                        { __typename: 'Pokemon', id: '005', name: 'Charmeleon', image: 'charmeleon.jpg' }
                    ]
                },
            },
        },
    },
    {
        request: {
            query: GET_POKEMON_BY_NAME,
            variables: { name: 'Squirtle' },
        },
        result: {
            data: {
                pokemon: {
                    __typename: 'Pokemon',
                    id: '007',
                    name: 'Squirtle',
                    types: ['Water'],
                    image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
                    attacks: {
                        __typename: 'Attacks',
                        fast: [{ __typename: 'Attack', name: 'Tackle', type: 'Normal', damage: 10 }],
                        special: [{ __typename: 'Attack', name: 'Water Gun', type: 'Water', damage: 40 }],
                    },
                    evolutions: [
                        { __typename: 'Pokemon', id: '008', name: 'Wartortle', image: 'wartortle.jpg' }
                    ]
                },
            },
        },
    },
];

// Mock useSearchParams
jest.mock("next/navigation", () => ({
    useSearchParams: () => new URLSearchParams({ name: 'Bulbasaur' }),
    useRouter: () => ({
        replace: jest.fn(),
    }),
    usePathname: () => '/',
}));

// Mock next/link
jest.mock("next/link", () => {
    return ({ children, href }: { children: React.ReactNode; href: string }) => {
        return <a href={href}>{children}</a>;
    };
});

describe('Pokemon Page', () => {
    it('renders Bulbasaur with Grass type', async () => {
        // Override mock to return Bulbasaur
        const searchParamsModule = require('next/navigation');
        searchParamsModule.useSearchParams = () => new URLSearchParams({ name: 'Bulbasaur' });

        render(
            <MockedProviderNew mocks={mocks}>
                <Home />
            </MockedProviderNew>
        );

        expect(await screen.findByText('Bulbasaur')).toBeInTheDocument();
        const typesList = await screen.findByTestId('types-list');
        expect(typesList).toHaveTextContent('Grass');
    });

    it('renders Charmander with Fire type', async () => {
        const searchParamsModule = require('next/navigation');
        searchParamsModule.useSearchParams = () => new URLSearchParams({ name: 'Charmander' });

        render(
            <MockedProviderNew mocks={mocks}>
                <Home />
            </MockedProviderNew>
        );

        expect(await screen.findByText('Charmander')).toBeInTheDocument();
        const typesList = await screen.findByTestId('types-list');
        expect(typesList).toHaveTextContent('Fire');
    });

    it('renders Squirtle with Water type', async () => {
        const searchParamsModule = require('next/navigation');
        searchParamsModule.useSearchParams = () => new URLSearchParams({ name: 'Squirtle' });

        render(
            <MockedProviderNew mocks={mocks}>
                <Home />
            </MockedProviderNew>
        );

        expect(await screen.findByText('Squirtle')).toBeInTheDocument();
        const typesList = await screen.findByTestId('types-list');
        expect(typesList).toHaveTextContent('Water');
    });
});
