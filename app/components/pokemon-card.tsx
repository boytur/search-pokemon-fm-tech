import React from 'react';
import { Pokemon } from '../types/pokemon';
import Link from 'next/link';
import { Zap, Flame } from 'lucide-react';
import Image from 'next/image';

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className="w-full max-w-3xl mx-auto animate-fade-in-up">
            <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                {/* Card Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row gap-6 items-center md:items-start bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="relative w-40 h-40 shrink-0 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-center p-4 shadow-sm group">
                        {pokemon.image ? (
                            <Image
                                src={pokemon.image}
                                alt={pokemon.name}
                                width={160}
                                height={160}
                                className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                            />
                        ) : (
                            <div className="text-gray-300 dark:text-gray-700">No Image</div>
                        )}
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 uppercase">
                            {pokemon.name}
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start" data-testid="types-list">
                            {pokemon.types.map((type) => (
                                <span
                                    key={type}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-6 grid gap-8">
                    {/* Attacks Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2 text-gray-900 dark:text-gray-100">
                                <Zap className="w-4 h-4 text-orange-500" />
                                Fast Attacks
                            </h3>
                            <div className="rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 divide-y divide-gray-100 dark:divide-gray-800">
                                {pokemon.attacks.fast.map((attack) => (
                                    <div key={attack.name} className="p-3 text-sm flex justify-between items-center group hover:bg-white dark:hover:bg-gray-800 transition-colors">
                                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">{attack.name}</span>
                                        <div className="flex gap-3 text-xs text-gray-500">
                                            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-700 dark:text-gray-300">{attack.type}</span>
                                            <span className="font-semibold">{attack.damage} AP</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2 text-gray-900 dark:text-gray-100">
                                <Flame className="w-4 h-4 text-red-500" />
                                Special Attacks
                            </h3>
                            <div className="rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 divide-y divide-gray-100 dark:divide-gray-800">
                                {pokemon.attacks.special.map((attack) => (
                                    <div key={attack.name} className="p-3 text-sm flex justify-between items-center group hover:bg-white dark:hover:bg-gray-800 transition-colors">
                                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">{attack.name}</span>
                                        <div className="flex gap-3 text-xs text-gray-500">
                                            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-700 dark:text-gray-300">{attack.type}</span>
                                            <span className="font-semibold text-red-600 dark:text-red-400">{attack.damage} AP</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Evolutions */}
                    {pokemon.evolutions && pokemon.evolutions.length > 0 && (
                        <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <h3 className="font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100">Evolutions</h3>
                            <div className="flex flex-wrap gap-4">
                                {pokemon.evolutions.map((ev) => (
                                    <Link
                                        href={`/?name=${ev.name}`}
                                        key={ev.name}
                                        className="flex flex-col items-center gap-2 group cursor-pointer"
                                    >
                                        <div className="w-20 h-20 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 flex items-center justify-center transition-all group-hover:border-blue-500 group-hover:shadow-md group-hover:-translate-y-1">
                                            {ev.image ? (
                                                <img src={ev.image} alt={ev.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <div className="text-xs text-gray-400">?</div>
                                            )}
                                        </div>
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">{ev.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
