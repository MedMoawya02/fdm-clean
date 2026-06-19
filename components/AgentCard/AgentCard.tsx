import Link from 'next/link';
import { Agent } from '@/types';
import { METIER_ICON, METIER_LABELS } from '@/data/agents';
import styles from './AgentCard.module.css';

const METIER_CLASS: Record<string, string> = {
  fdm:        styles.metierFdm,
  nounou:     styles.metierNounou,
  cuisiniere: styles.metierCuisiniere,
  vitrier:    styles.metierVitrier,
};

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent: a }: AgentCardProps) {
  const stars = '★'.repeat(Math.floor(a.rating)) + '☆'.repeat(5 - Math.floor(a.rating));

  return (
    <Link href={`/annuaire/${a.id}`} className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.avatarRow}>
          <div className={styles.avatar}>
            {a.avatar}
            <div
              className={`${styles.statusDot} ${
                a.status === 'online' ? styles.statusOnline : styles.statusBusy
              }`}
            />
          </div>

          <div className={styles.avatarInfo}>
            <div className={styles.name}>
              {a.prenom}
              {a.verified ? (
                <span className={styles.verifiedBadge} title="ID vérifié">✓</span>
              ) : (
                <span className={styles.unverifiedBadge} title="Non vérifié">?</span>
              )}
            </div>
            <div className={`${styles.metier} ${METIER_CLASS[a.metier] ?? ''}`}>
              {METIER_ICON[a.metier]} {METIER_LABELS[a.metier]}
            </div>
            <div className={styles.location}>
              📍 {a.ville} · {a.age} ans
            </div>
          </div>
        </div>

        <div className={styles.rating}>
          <span className={styles.stars}>{stars}</span>
          <span className={styles.score}>{a.rating}</span>
          <span className={styles.reviews}>({a.reviews})</span>
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Expérience</div>
          <div className={styles.detailValue}>{a.experience} ans</div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Nationalité</div>
          <div className={styles.detailValue}>{a.nationalite}</div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Langues</div>
          <div className={styles.detailValue}>{a.langues.join(', ')}</div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>ID vérifié</div>
          <div className={`${styles.detailValue} ${a.verified ? styles.detailValueGreen : ''}`}>
            {a.verified ? '✅ Oui' : '⬜ Non'}
          </div>
        </div>
      </div>

      <div className={`${styles.sleeping} ${a.couchante ? styles.sleepingYes : styles.sleepingNo}`}>
        {a.couchante ? '🛏 Couchante disponible' : '🏠 Non couchante'}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.priceInfo}>
          <div className={styles.priceDay}>
            {a.prix_jour} DH<span> / jour</span>
          </div>
          <div className={styles.priceWeek}>{a.prix_semaine} DH / semaine</div>
        </div>
        <button className={styles.btnVoir}>Voir profil →</button>
      </div>
    </Link>
  );
}
