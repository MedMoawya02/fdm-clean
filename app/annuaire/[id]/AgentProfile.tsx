'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Agent } from '@/types';
import { METIER_ICON, METIER_LABELS } from '@/data/agents';
import BookingModal from './BookingModal';
import styles from './profil.module.css';

const METIER_CLASS: Record<string, string> = {
  fdm:        styles.metierFdm,
  nounou:     styles.metierNounou,
  cuisiniere: styles.metierCuisiniere,
  vitrier:    styles.metierVitrier,
};

// Avis fictifs pour la démo
const SAMPLE_REVIEWS = [
  { name: 'Nadia E.', stars: 5, text: "Ponctuelle, soigneuse et très professionnelle. Je recommande vivement !" },
  { name: 'Karim B.', stars: 5, text: "Excellent travail, rien à redire. Toujours à l'heure et très efficace." },
  { name: 'Salma R.', stars: 4, text: "Très satisfaite du service. Petite remarque sur les produits utilisés." },
];

interface AgentProfileProps {
  agent: Agent;
}

export default function AgentProfile({ agent: a }: AgentProfileProps) {
  const [showModal, setShowModal] = useState(false);

  const stars = '★'.repeat(Math.floor(a.rating)) + '☆'.repeat(5 - Math.floor(a.rating));
  const isOnline = a.status === 'online';

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className={styles.breadcrumb}>
        <Link href="/">Accueil</Link>
        <span>/</span>
        <Link href="/annuaire">Annuaire</Link>
        <span>/</span>
        <span className={styles.breadcrumbCurrent}>{a.prenom}</span>
      </div>

      <div className={styles.page}>

        {/* ════════════ MAIN COLUMN ════════════ */}
        <div>

          {/* ── Header card ── */}
          <div className={styles.headerCard}>
            <div className={styles.headerTop}>
              <div className={styles.avatar}>
                {a.avatar}
                <div className={`${styles.statusDot} ${isOnline ? styles.statusOnline : styles.statusBusy}`} />
              </div>

              <div className={styles.headerInfo}>
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
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>📍 {a.ville}</span>
                  <span className={styles.metaItem}>{a.age} ans</span>
                  <span className={styles.metaItem}>{a.nationalite}</span>
                  <span className={`${styles.statusBadge} ${isOnline ? styles.statusBadgeOnline : styles.statusBadgeBusy}`}>
                    {isOnline ? '🟢 Disponible' : '🔴 Occupée'}
                  </span>
                </div>
              </div>

              <div className={styles.ratingBlock}>
                <div className={styles.ratingScore}>{a.rating}</div>
                <div className={styles.ratingStars}>{stars}</div>
                <div className={styles.ratingCount}>{a.reviews} avis</div>
              </div>
            </div>

            <p className={styles.desc}>{a.desc}</p>
          </div>

          {/* ── Details card ── */}
          <div className={styles.detailsCard}>
            <h3 className={styles.sectionTitle}>Informations</h3>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>📅</div>
                <div>
                  <div className={styles.detailLabel}>Expérience</div>
                  <div className={styles.detailValue}>{a.experience} ans</div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>🌍</div>
                <div>
                  <div className={styles.detailLabel}>Nationalité</div>
                  <div className={styles.detailValue}>{a.nationalite}</div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>{a.couchante ? '🛏️' : '🏠'}</div>
                <div>
                  <div className={styles.detailLabel}>Hébergement</div>
                  <div className={styles.detailValue}>
                    {a.couchante ? 'Couchante' : 'Non couchante'}
                  </div>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>{a.verified ? '✅' : '⬜'}</div>
                <div>
                  <div className={styles.detailLabel}>ID vérifié</div>
                  <div className={`${styles.detailValue} ${a.verified ? styles.detailValueGreen : ''}`}>
                    {a.verified ? 'Oui' : 'Non'}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.langTags}>
              {a.langues.map((l) => (
                <span key={l} className={styles.langTag}>🗣️ {l}</span>
              ))}
            </div>
          </div>

          {/* ── Reviews card ── */}
          <div className={styles.reviewsCard}>
            <h3 className={styles.sectionTitle}>Avis clients ({a.reviews})</h3>

            {SAMPLE_REVIEWS.map((r, i) => (
              <div key={i} className={styles.reviewItem}>
                <div className={styles.reviewHead}>
                  <div className={styles.reviewAvatar}>👤</div>
                  <span className={styles.reviewName}>{r.name}</span>
                  <span className={styles.reviewStars}>
                    {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                  </span>
                </div>
                <p className={styles.reviewText}>&laquo; {r.text} &raquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════ SIDEBAR — BOOKING ════════════ */}
        <div className={styles.bookingCard}>
          <div className={styles.priceBlock}>
            <div className={styles.priceDay}>
              {a.prix_jour} DH<span> / jour</span>
            </div>
          </div>
          <div className={styles.priceWeek}>{a.prix_semaine} DH / semaine</div>

          <div className={styles.quickInfo}>
            <div className={styles.quickInfoRow}>
              <span className={styles.quickInfoLabel}>📍 Zone</span>
              <span className={styles.quickInfoValue}>{a.ville}</span>
            </div>
            <div className={styles.quickInfoRow}>
              <span className={styles.quickInfoLabel}>⭐ Note</span>
              <span className={styles.quickInfoValue}>{a.rating} / 5</span>
            </div>
            <div className={styles.quickInfoRow}>
              <span className={styles.quickInfoLabel}>🕐 Statut</span>
              <span className={styles.quickInfoValue}>
                {isOnline ? 'Disponible' : 'Occupée'}
              </span>
            </div>
          </div>

          {/* ── BOUTON RÉSERVER ── */}
          <button
            className={`${styles.btnReserve} ${!isOnline ? styles.btnReserveBusy : ''}`}
            onClick={() => setShowModal(true)}
          >
            {isOnline ? '📅 Réserver maintenant' : '📅 Réserver (sur liste d\'attente)'}
          </button>

          <button className={styles.btnContact}>
            💬 Envoyer un message
          </button>

          <div className={styles.bookingNote}>
            🔒 Paiement sécurisé · Sans engagement
          </div>

          <div className={styles.trustList}>
            <div className={styles.trustItem}>
              <span className={styles.trustCheck}>✓</span>
              Identité vérifiée
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustCheck}>✓</span>
              Assurance dommages incluse
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustCheck}>✓</span>
              Annulation gratuite 24h avant
            </div>
          </div>
        </div>
      </div>

      {/* ── BOOKING MODAL ── */}
      {showModal && (
        <BookingModal agent={a} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
