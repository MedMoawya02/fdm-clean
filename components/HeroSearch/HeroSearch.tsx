'use client';

import styles from './HeroSearch.module.css';

interface HeroSearchProps {
  ville: string;
  metier: string;
  onVilleChange: (v: string) => void;
  onMetierChange: (v: string) => void;
}

export default function HeroSearch({
  ville,
  metier,
  onVilleChange,
  onMetierChange,
}: HeroSearchProps) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Trouvez l&apos;aide à domicile idéale</h1>
      <p className={styles.subtitle}>
        Parcourez notre annuaire d&apos;agentes vérifiées — femme de ménage, nounou, cuisinière, vitrier
      </p>

      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel} htmlFor="heroVille">Ville</label>
          <select
            id="heroVille"
            className={styles.filterSelect}
            value={ville}
            onChange={(e) => onVilleChange(e.target.value)}
          >
            <option value="">Toutes les villes</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Fès">Fès</option>
            <option value="Bouskoura">Bouskoura</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label className={styles.filterLabel} htmlFor="heroMetier">Métier</label>
          <select
            id="heroMetier"
            className={styles.filterSelect}
            value={metier}
            onChange={(e) => onMetierChange(e.target.value)}
          >
            <option value="">Tous les métiers</option>
            <option value="fdm">🧹 Femme de ménage</option>
            <option value="nounou">👶 Nounou</option>
            <option value="cuisiniere">🍳 Cuisinière</option>
            <option value="vitrier">🪟 Vitrier</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>&nbsp;</span>
          <button className={styles.btnSearch}>🔍 Rechercher</button>
        </div>
      </div>
    </div>
  );
}
