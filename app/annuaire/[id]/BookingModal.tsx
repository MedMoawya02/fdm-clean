'use client';

import { useState } from 'react';
import { Agent } from '@/types';
import styles from './profil.module.css';

const FREQUENCIES = [
  { value: 'ponctuel',  label: 'Ponctuel' },
  { value: 'hebdo',     label: 'Hebdomadaire' },
  { value: 'bihebdo',   label: '2x / semaine' },
  { value: 'quotidien', label: 'Quotidien' },
];

interface BookingModalProps {
  agent: Agent;
  onClose: () => void;
}

export default function BookingModal({ agent, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: '',
    frequency: 'ponctuel',
    nom: '',
    telephone: '',
    adresse: '',
  });

  const set = (patch: Partial<typeof form>) => setForm((f) => ({ ...f, ...patch }));

  const canSubmit = form.date && form.nom && form.telephone && form.adresse;

  const handleSubmit = () => {
    if (!canSubmit) return;
    // Ici : appel API de réservation
    setSubmitted(true);
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>
            {submitted ? 'Demande envoyée' : 'Réserver une prestation'}
          </h3>
          <button className={styles.modalClose} onClick={onClose} aria-label="Fermer">
            ✕
          </button>
        </div>

        {!submitted ? (
          <>
            <div className={styles.modalAgentInfo}>
              <div className={styles.modalAgentAvatar}>{agent.avatar}</div>
              <div>
                <div className={styles.modalAgentName}>{agent.prenom}</div>
                <div className={styles.modalAgentMetier}>
                  {agent.ville} · {agent.prix_jour} DH/jour
                </div>
              </div>
            </div>

            <div className={styles.modalField}>
              <label className={styles.modalLabel}>Date souhaitée</label>
              <input
                type="date"
                className={styles.modalInput}
                value={form.date}
                onChange={(e) => set({ date: e.target.value })}
              />
            </div>

            <div className={styles.modalField}>
              <label className={styles.modalLabel}>Fréquence</label>
              <select
                className={styles.modalSelect}
                value={form.frequency}
                onChange={(e) => set({ frequency: e.target.value })}
              >
                {FREQUENCIES.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </div>

            <div className={styles.modalField}>
              <label className={styles.modalLabel}>Nom complet</label>
              <input
                type="text"
                className={styles.modalInput}
                placeholder="Votre nom"
                value={form.nom}
                onChange={(e) => set({ nom: e.target.value })}
              />
            </div>

            <div className={styles.modalRow}>
              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Téléphone</label>
                <input
                  type="tel"
                  className={styles.modalInput}
                  placeholder="06 XX XX XX XX"
                  value={form.telephone}
                  onChange={(e) => set({ telephone: e.target.value })}
                />
              </div>
              <div className={styles.modalField}>
                <label className={styles.modalLabel}>Adresse</label>
                <input
                  type="text"
                  className={styles.modalInput}
                  placeholder="Quartier..."
                  value={form.adresse}
                  onChange={(e) => set({ adresse: e.target.value })}
                />
              </div>
            </div>

            <button
              className={styles.modalSubmit}
              onClick={handleSubmit}
              disabled={!canSubmit}
            >
              Confirmer la réservation
            </button>
          </>
        ) : (
          <div className={styles.modalSuccess}>
            <div className={styles.modalSuccessIcon}>✅</div>
            <div className={styles.modalSuccessTitle}>C&apos;est noté !</div>
            <p className={styles.modalSuccessText}>
              {agent.prenom} a bien reçu votre demande pour le {form.date}.
              Vous serez contacté(e) au {form.telephone} pour confirmer.
            </p>
            <button className={styles.modalSubmit} onClick={onClose}>
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
