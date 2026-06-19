import { Agent } from '@/types';

export const AGENTS: Agent[] = [
  { id: 1, prenom: 'Fatima', age: 34, avatar: '👩', metier: 'fdm', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'français'], status: 'online', rating: 4.9, reviews: 127, experience: 4, couchante: false, prix_jour: 250, prix_semaine: 990, verified: true, desc: "Professionnelle rigoureuse, 4 ans d'expérience en ménage courant et grand ménage." },
  { id: 2, prenom: 'Khadija', age: 28, avatar: '👩', metier: 'fdm', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija'], status: 'online', rating: 4.8, reviews: 89, experience: 3, couchante: false, prix_jour: 230, prix_semaine: 900, verified: true, desc: 'Spécialisée dans les appartements. Ponctuelle et discrète.' },
  { id: 3, prenom: 'Samira', age: 42, avatar: '👩', metier: 'nounou', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'amazigh'], status: 'online', rating: 5.0, reviews: 64, experience: 8, couchante: true, prix_jour: 280, prix_semaine: 1100, verified: true, desc: "Nounou expérimentée, à l'aise avec les enfants de 0 à 10 ans." },
  { id: 4, prenom: 'Naima', age: 38, avatar: '👩', metier: 'cuisiniere', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'français'], status: 'busy', rating: 4.7, reviews: 42, experience: 5, couchante: true, prix_jour: 300, prix_semaine: 1200, verified: true, desc: 'Cuisinière marocaine et internationale. Spécialité tajines et pastilla.' },
  { id: 5, prenom: 'Zineb', age: 25, avatar: '👩', metier: 'fdm', ville: 'Fès', nationalite: 'Marocaine', langues: ['arabe', 'amazigh'], status: 'online', rating: 4.6, reviews: 31, experience: 2, couchante: false, prix_jour: 200, prix_semaine: 780, verified: false, desc: 'Jeune agente motivée, disponible en semaine à Fès.' },
  { id: 6, prenom: 'Hassan', age: 45, avatar: '👨', metier: 'vitrier', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'français'], status: 'online', rating: 4.9, reviews: 88, experience: 12, couchante: false, prix_jour: 350, prix_semaine: 1400, verified: true, desc: 'Vitrier professionnel, spécialité baies vitrées et vérandas.' },
  { id: 7, prenom: 'Halima', age: 50, avatar: '👩', metier: 'fdm', ville: 'Bouskoura', nationalite: 'Marocaine', langues: ['arabe', 'darija'], status: 'online', rating: 4.8, reviews: 105, experience: 10, couchante: true, prix_jour: 260, prix_semaine: 1050, verified: true, desc: 'Grande expérience villas et résidences à Bouskoura.' },
  { id: 8, prenom: 'Rajae', age: 30, avatar: '👩', metier: 'nounou', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'français'], status: 'online', rating: 4.7, reviews: 55, experience: 4, couchante: true, prix_jour: 270, prix_semaine: 1050, verified: true, desc: 'Nounou diplômée petite enfance, très patiente et créative.' },
  { id: 9, prenom: 'Souad', age: 36, avatar: '👩', metier: 'cuisiniere', ville: 'Fès', nationalite: 'Marocaine', langues: ['arabe', 'amazigh'], status: 'busy', rating: 4.5, reviews: 28, experience: 6, couchante: false, prix_jour: 280, prix_semaine: 1100, verified: true, desc: 'Cuisinière traditionnelle fassi, spécialité pastilla et harira.' },
  { id: 10, prenom: 'Meryem', age: 27, avatar: '👩', metier: 'fdm', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'français'], status: 'online', rating: 4.9, reviews: 72, experience: 3, couchante: false, prix_jour: 240, prix_semaine: 950, verified: true, desc: 'Agente fiable, spécialisée remise en état Airbnb.' },
  { id: 11, prenom: 'Aicha', age: 44, avatar: '👩', metier: 'fdm', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija'], status: 'busy', rating: 4.6, reviews: 91, experience: 9, couchante: true, prix_jour: 260, prix_semaine: 1020, verified: false, desc: "Agente confirmée, à l'aise avec familles nombreuses." },
  { id: 12, prenom: 'Karima', age: 33, avatar: '👩', metier: 'vitrier', ville: 'Casablanca', nationalite: 'Marocaine', langues: ['arabe', 'darija', 'français'], status: 'online', rating: 4.8, reviews: 39, experience: 5, couchante: false, prix_jour: 320, prix_semaine: 1280, verified: true, desc: 'Spécialiste vitrerie et miroirs, matériel professionnel.' },
];

export const METIER_LABELS: Record<string, string> = {
  fdm: 'Femme de ménage',
  nounou: 'Nounou',
  cuisiniere: 'Cuisinière',
  vitrier: 'Vitrier',
};

export const METIER_ICON: Record<string, string> = {
  fdm: '🧹',
  nounou: '👶',
  cuisiniere: '🍳',
  vitrier: '🪟',
};
