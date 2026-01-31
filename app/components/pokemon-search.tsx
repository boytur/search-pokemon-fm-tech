
import { useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { AlertCircle, SearchX } from "lucide-react";
import { GET_POKEMON_BY_NAME } from "../graphql/queries/pokemon";
import { Pokemon } from "../types/pokemon";
import SearchForm from "./search-form";
import PokemonCard from "./pokemon-card";

type GetPokemonByNameData = {
    pokemon: Pokemon | null;
};

type GetPokemonByNameVars = {
    name: string;
};


export const PokemonSearch = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('name') || "Pikachu";

    const { data, loading, error } = useQuery<GetPokemonByNameData, GetPokemonByNameVars>(GET_POKEMON_BY_NAME, {
        variables: { name: search },
    });

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-black font-sans antialiased text-gray-900 dark:text-gray-50 selection:bg-gray-900 selection:text-white dark:selection:bg-gray-100 dark:selection:text-gray-900">
            <div className="container mx-auto max-w-5xl px-4 py-8 md:py-16 space-y-12">

                {/* Search Section */}
                <section className="w-full animate-fade-in-up delay-75">
                    <SearchForm />
                </section>

                {/* Results Section */}
                <main className="w-full animate-fade-in-up delay-150 min-h-[400px]">
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-24 space-y-6">
                            <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-900 dark:border-gray-800 dark:border-t-gray-50 rounded-full animate-spin"></div>
                            <p className="text-sm text-gray-500 font-medium animate-pulse">Loading data...</p>
                        </div>
                    )}

                    {error && (
                        <div className="max-w-md mx-auto p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                            <div>
                                <h3 className="text-sm font-semibold text-red-900 dark:text-red-200">Error</h3>
                                <p className="text-xs text-red-600 dark:text-red-300">{error.message}</p>
                            </div>
                        </div>
                    )}

                    {!loading && !error && data?.pokemon && (
                        <PokemonCard pokemon={data.pokemon} />
                    )}

                    {!loading && !error && !data?.pokemon && search && (
                        <div className="text-center py-20 space-y-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-400">
                                <SearchX className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">No results found</p>
                            <p className="text-gray-500">We couldn't find a Pokémon named "{search}"</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default PokemonSearch;
