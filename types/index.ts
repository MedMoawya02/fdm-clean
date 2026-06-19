export type Metier = 'fdm' | 'nounou' | 'cuisiniere' | 'vitrier';
export type Status = 'online' | 'busy';
export type Langue = 'arabe' | 'darija' | 'français' | 'amazigh';

export interface Agent {
  id: number;
  prenom: string;
  age: number;
  avatar: string;
  metier: Metier;
  ville: string;
  nationalite: string;
  langues: Langue[];
  status: Status;
  rating: number;
  reviews: number;
  experience: number;
  couchante: boolean;
  prix_jour: number;
  prix_semaine: number;
  verified: boolean;
  desc: string;
}

export interface Filters {
  ville: string;
  metier: string;
  dispo: string;
  sleeping: string;
  exp: number;
  rating: number;
  verified: string;
  tags: Langue[];
}

export type SortOption = 'rating' | 'exp' | 'price-asc' | 'price-desc';
