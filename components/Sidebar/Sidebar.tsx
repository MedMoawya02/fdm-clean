'use client';

import { Filters, Langue } from '@/types';
import styles from './Sidebar.module.css';

const LANGUES: { value: Langue; label: string }[] = [
  { value: 'arabe',    label: 'Arabe'    },
  { value: 'darija',   label: 'Darija'   },
  { value: 'français', label: 'Français' },
  { value: 'amazigh',  label: 'Amazigh'  },
];

interface SidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
}

export default function Sidebar({ filters, onChange, onReset }: SidebarProps) {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch });

  const toggleTag = (tag: Langue) => {
    const tags = filters.tags.includes(tag)
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];
    set({ tags });
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sbTitle}>
        Filtres
        <button className={styles.sbReset} onClick={onReset}>
          Réinitialiser
        </button>
      </div>

      <div className={styles.sbSection}>
        <div className={styles.sbSectionTitle}>Disponibilité</div>
        <div className={styles.sbOptions}>
          {[
            { value: '',       label: 'Toutes'                   },
            { value: 'online', label: '🟢 Disponible maintenant' },
            { value: 'busy',   label: '🔴 Occupée'               },
          ].map((opt) => (
            <label key={opt.value} className={styles.sbOption}>
              <input
                type="radio"
                name="dispo"
                checked={filters.dispo === opt.value}
                onChange={() => set({ dispo: opt.value })}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.sbSection}>
        <div className={styles.sbSectionTitle}>À coucher</div>
        <div className={styles.sbOptions}>
          {[
            { value: '',    label: 'Peu importe'     },
            { value: 'oui', label: '🛏 Couchante'    },
            { value: 'non', label: '🏠 Non couchante' },
          ].map((opt) => (
            <label key={opt.value} className={styles.sbOption}>
              <input
                type="radio"
                name="sleeping"
                checked={filters.sleeping === opt.value}
                onChange={() => set({ sleeping: opt.value })}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.sbSection}>
        <div className={styles.sbSectionTitle}>Langues parlées</div>
        <div className={styles.tagsWrap}>
          {LANGUES.map((l) => (
            <button
              key={l.value}
              className={`${styles.specTag} ${filters.tags.includes(l.value) ? styles.specTagActive : ''}`}
              onClick={() => toggleTag(l.value)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.sbSection}>
        <div className={styles.sbSectionTitle}>Expérience</div>
        <div className={styles.sbOptions}>
          {[
            { value: 0, label: 'Peu importe' },
            { value: 1, label: '1+ an'       },
            { value: 3, label: '3+ ans'      },
            { value: 5, label: '5+ ans'      },
          ].map((opt) => (
            <label key={opt.value} className={styles.sbOption}>
              <input
                type="radio"
                name="exp"
                checked={filters.exp === opt.value}
                onChange={() => set({ exp: opt.value })}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.sbSection}>
        <div className={styles.sbSectionTitle}>Note minimale</div>
        <div className={styles.rangeWrap}>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={filters.rating}
            onChange={(e) => set({ rating: parseFloat(e.target.value) })}
          />
          <div className={styles.rangeLabels}>
            <span>Toutes</span>
            <span>{filters.rating === 0 ? 'Toutes' : `${filters.rating} ★`}</span>
          </div>
        </div>
      </div>

      <div className={styles.sbSection}>
        <div className={styles.sbSectionTitle}>ID vérifié</div>
        <div className={styles.sbOptions}>
          {[
            { value: '',  label: 'Peu importe'         },
            { value: '1', label: '✅ Vérifié uniquement' },
          ].map((opt) => (
            <label key={opt.value} className={styles.sbOption}>
              <input
                type="radio"
                name="verified"
                checked={filters.verified === opt.value}
                onChange={() => set({ verified: opt.value })}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
