export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface Evolution {
  name: string;
  image?: string;
}

export interface Pokemon {
  id: string;
  name: string;
  image?: string;
  types: string[];
  attacks: Attacks;
  evolutions?: Evolution[] | null;
}