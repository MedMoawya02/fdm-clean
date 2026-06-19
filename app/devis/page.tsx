'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './devis.module.css';

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */

const SERVICES = [
  { value: 'fdm',        icon: '🧹', label: 'Ménage',     desc: 'Courant / grand ménage' },
  { value: 'nounou',     icon: '👶', label: 'Nounou',      desc: 'Garde d\'enfants' },
  { value: 'cuisiniere', icon: '🍳', label: 'Cuisine',     desc: 'Repas à domicile' },
  { value: 'vitrier',    icon: '🪟', label: 'Vitrerie',    desc: 'Vitres, baies vitrées' },
];

const PROFILES = [
  { value: 'particulier', icon: '🏠', label: 'Particulier', desc: 'Pour mon domicile' },
  { value: 'entreprise',  icon: '🏢', label: 'Entreprise',  desc: 'Bureaux, locaux pro' },
];

const FREQUENCIES = [
  { value: 'ponctuel',     label: 'Ponctuel' },
  { value: 'hebdo',        label: 'Hebdomadaire' },
  { value: 'bihebdo',      label: '2x / semaine' },
  { value: 'quotidien',    label: 'Quotidien' },
  { value: 'mensuel',      label: 'Mensuel' },
];

const VILLES = ['Casablanca', 'Fès', 'Bouskoura'];

const STEPS = [
  { num: 1, label: 'Service' },
  { num: 2, label: 'Détails' },
  { num: 3, label: 'Coordonnées' },
  { num: 4, label: 'Confirmation' },
];

interface FormData {
  profile: string;
  service: string;
  ville: string;
  frequency: string;
  surface: string;
  date: string;
  nom: string;
  telephone: string;
  email: string;
  adresse: string;
  message: string;
}

const INITIAL_DATA: FormData = {
  profile: '',
  service: '',
  ville: '',
  frequency: '',
  surface: '',
  date: '',
  nom: '',
  telephone: '',
  email: '',
  adresse: '',
  message: '',
};

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  const set = (patch: Partial<FormData>) => setData((d) => ({ ...d, ...patch }));

  const canGoNext = () => {
    if (step === 1) return data.profile && data.service;
    if (step === 2) return data.ville && data.frequency;
    if (step === 3) return data.nom && data.telephone;
    return true;
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Ici : appel API / envoi du formulaire
    setSubmitted(true);
  };

  const serviceLabel = SERVICES.find((s) => s.value === data.service)?.label || '—';
  const profileLabel = PROFILES.find((p) => p.value === data.profile)?.label || '—';
  const freqLabel = FREQUENCIES.find((f) => f.value === data.frequency)?.label || '—';

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <span className={styles.heroDot} />
          Devis gratuit
        </div>
        <h1 className={styles.title}>Demandez votre devis</h1>
        <p className={styles.subtitle}>
          Répondez à quelques questions, nous vous recontactons sous 24h avec
          une offre adaptée à vos besoins.
        </p>
      </section>

      {/* ── BODY ── */}
      <div className={styles.body}>

        {!submitted ? (
          <>
            {/* Progress */}
            <div className={styles.progress}>
              {STEPS.map((s, i) => (
                <div key={s.num} style={{ display: 'contents' }}>
                  <div className={styles.progressStep}>
                    <div
                      className={`${styles.progressCircle} ${
                        s.num === step ? styles.progressCircleActive : ''
                      } ${s.num < step ? styles.progressCircleDone : ''}`}
                    >
                      {s.num < step ? '✓' : s.num}
                    </div>
                    <span
                      className={`${styles.progressLabel} ${
                        s.num === step ? styles.progressLabelActive : ''
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`${styles.progressLine} ${
                        s.num < step ? styles.progressLineDone : ''
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Form card */}
            <div className={styles.formCard}>

              {/* ── STEP 1 — Service ── */}
              {step === 1 && (
                <>
                  <h2 className={styles.stepTitle}>Quel type de prestation ?</h2>
                  <p className={styles.stepSub}>Sélectionnez votre profil et le service souhaité</p>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Vous êtes</label>
                    <div className={styles.optionGrid}>
                      {PROFILES.map((p) => (
                        <div
                          key={p.value}
                          className={`${styles.optionCard} ${data.profile === p.value ? styles.optionCardActive : ''}`}
                          onClick={() => set({ profile: p.value })}
                        >
                          <span className={styles.optionIcon}>{p.icon}</span>
                          <div className={styles.optionLabel}>{p.label}</div>
                          <div className={styles.optionDesc}>{p.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Service souhaité</label>
                    <div className={styles.optionGrid}>
                      {SERVICES.map((s) => (
                        <div
                          key={s.value}
                          className={`${styles.optionCard} ${data.service === s.value ? styles.optionCardActive : ''}`}
                          onClick={() => set({ service: s.value })}
                        >
                          <span className={styles.optionIcon}>{s.icon}</span>
                          <div className={styles.optionLabel}>{s.label}</div>
                          <div className={styles.optionDesc}>{s.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* ── STEP 2 — Détails ── */}
              {step === 2 && (
                <>
                  <h2 className={styles.stepTitle}>Détails de la prestation</h2>
                  <p className={styles.stepSub}>Aidez-nous à mieux estimer votre besoin</p>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Ville</label>
                    <select
                      className={styles.select}
                      value={data.ville}
                      onChange={(e) => set({ ville: e.target.value })}
                    >
                      <option value="">Sélectionnez une ville</option>
                      {VILLES.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Fréquence souhaitée</label>
                    <div className={styles.pillGroup}>
                      {FREQUENCIES.map((f) => (
                        <div
                          key={f.value}
                          className={`${styles.pill} ${data.frequency === f.value ? styles.pillActive : ''}`}
                          onClick={() => set({ frequency: f.value })}
                        >
                          {f.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.fieldLabel}>Surface approx. (m²)</label>
                      <input
                        type="number"
                        className={styles.input}
                        placeholder="Ex: 90"
                        value={data.surface}
                        onChange={(e) => set({ surface: e.target.value })}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.fieldLabel}>Date souhaitée</label>
                      <input
                        type="date"
                        className={styles.input}
                        value={data.date}
                        onChange={(e) => set({ date: e.target.value })}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* ── STEP 3 — Coordonnées ── */}
              {step === 3 && (
                <>
                  <h2 className={styles.stepTitle}>Vos coordonnées</h2>
                  <p className={styles.stepSub}>Pour vous recontacter avec votre devis personnalisé</p>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>
                      {data.profile === 'entreprise' ? 'Nom de l\'entreprise / Contact' : 'Nom complet'}
                    </label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Ex: Nadia El Fassi"
                      value={data.nom}
                      onChange={(e) => set({ nom: e.target.value })}
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.fieldLabel}>Téléphone</label>
                      <input
                        type="tel"
                        className={styles.input}
                        placeholder="06 XX XX XX XX"
                        value={data.telephone}
                        onChange={(e) => set({ telephone: e.target.value })}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.fieldLabel}>Email (optionnel)</label>
                      <input
                        type="email"
                        className={styles.input}
                        placeholder="vous@email.com"
                        value={data.email}
                        onChange={(e) => set({ email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Adresse</label>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Quartier, rue..."
                      value={data.adresse}
                      onChange={(e) => set({ adresse: e.target.value })}
                    />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>Message (optionnel)</label>
                    <textarea
                      className={styles.textarea}
                      placeholder="Précisions sur votre besoin..."
                      value={data.message}
                      onChange={(e) => set({ message: e.target.value })}
                    />
                  </div>
                </>
              )}

              {/* ── STEP 4 — Confirmation ── */}
              {step === 4 && (
                <>
                  <h2 className={styles.stepTitle}>Vérifiez votre demande</h2>
                  <p className={styles.stepSub}>Tout est correct ? Envoyez votre demande de devis</p>

                  <div className={styles.summary}>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Profil</span>
                      <span className={styles.summaryValue}>{profileLabel}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Service</span>
                      <span className={styles.summaryValue}>{serviceLabel}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Ville</span>
                      <span className={styles.summaryValue}>{data.ville || '—'}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Fréquence</span>
                      <span className={styles.summaryValue}>{freqLabel}</span>
                    </div>
                    {data.surface && (
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryLabel}>Surface</span>
                        <span className={styles.summaryValue}>{data.surface} m²</span>
                      </div>
                    )}
                    {data.date && (
                      <div className={styles.summaryRow}>
                        <span className={styles.summaryLabel}>Date souhaitée</span>
                        <span className={styles.summaryValue}>{data.date}</span>
                      </div>
                    )}
                    <div className={styles.summaryRow}>
                      <span className={styles.summaryLabel}>Contact</span>
                      <span className={styles.summaryValue}>{data.nom} — {data.telephone}</span>
                    </div>
                  </div>
                </>
              )}

              {/* ── NAV BUTTONS ── */}
              <div className={styles.formNav}>
                {step > 1 && (
                  <button className={styles.btnBack} onClick={handleBack}>
                    ← Retour
                  </button>
                )}

                {step < 4 ? (
                  <button
                    className={styles.btnNext}
                    onClick={handleNext}
                    disabled={!canGoNext()}
                  >
                    Continuer →
                  </button>
                ) : (
                  <button className={styles.btnNext} onClick={handleSubmit}>
                    Envoyer ma demande
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          /* ── SUCCESS STATE ── */
          <div className={styles.formCard}>
            <div className={styles.success}>
              <div className={styles.successIcon}>✅</div>
              <h2 className={styles.successTitle}>Demande envoyée !</h2>
              <p className={styles.successText}>
                Merci {data.nom.split(' ')[0] || ''} ! Notre équipe vous
                recontacte sous 24h au {data.telephone} avec votre devis
                personnalisé.
              </p>
              <Link href="/" className={styles.successBtn}>
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
