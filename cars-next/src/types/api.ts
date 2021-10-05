export interface Owner {
  vehicle: string;
  ownerName: string;
  details: string;
}

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  ownerId: number;
}
