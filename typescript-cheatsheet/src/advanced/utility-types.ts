// Partial
interface Starship {
  name: string;
  enableHyperJump: boolean;
}

const updateStarship = (starshipId: number, starship: Partial<Starship>) => {};

updateStarship(1, { name: 'Explorer' });

// Required
interface E {
  x?: number;
  y?: number;
}

const objectE: Required<E> = { x: 10, y: 20 };

// Readonly
interface F {
  x: number;
  y: number;
}

const objectF: Readonly<F> = { x: 10, y: 20 };

// Record, use for maps
const fruits: Record<string, number> = {
  apples: 10,
  oranges: 20,
};

// Pick
interface G {
  x: number;
  y: number;
  z: number;
}

const gs: Pick<G, 'x' | 'z'> = {
  x: 10,
  z: 10,
};

// Omit
interface H {
  x: number;
  y: number;
  z: number;
}

const hs: Omit<H, 'x' | 'z'> = {
  y: 10,
};
