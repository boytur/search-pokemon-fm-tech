'use client';

import { Suspense } from "react";
import { PokemonSearch } from "./components/pokemon-search";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PokemonSearch />
    </Suspense>
  );
}
