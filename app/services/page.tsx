'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './services.module.css';

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */

const AUDIENCES = [
  {
    icon: '🏠',
    title: 'Particuliers',
    desc: 'Ménage régulier ou ponctuel pour votre maison',
    href: '#particuliers',
  },
  {
    icon: '🏢',
    title: 'Entreprises',
    desc: 'Nettoyage de bureaux et locaux professionnels',
    href: '#entreprises',
  },
  {
    icon: '✨',
    title: 'Services premium',
    desc: 'Nounou, cuisinière, vitrier — à la carte',
    href: '/annuaire',
  },
];

const STATS = [
  { value: '10 000+', label: 'Clients satisfaits' },
  { value: '4.9 / 5',  label: 'Note moyenne' },
  { value: '500+',     label: 'Agentes vérifiées' },
  { value: '3',        label: 'Villes couvertes' },
];

const STEPS_PARTICULIERS = [
  {
    num: '1',
    title: 'Remplissez le formulaire',
    desc: "Sélectionnez votre ville, la surface de votre logement, le type de prestation et votre créneau horaire préféré — en moins de 2 minutes.",
  },
  {
    num: '2',
    title: "Le prix s'affiche instantanément",
    desc: "Aucune surprise. Le tarif est calculé en temps réel selon votre surface et votre fréquence. Vous acceptez, on s'occupe du reste.",
  },
  {
    num: '3',
    title: "Profitez d'un intérieur impeccable",
    desc: "Votre agente vérifiée arrive à l'heure convenue. Ponctuelle, discrète, assurée. Notez la prestation et reconduisez facilement.",
  },
];

const STEPS_ENTREPRISES = [
  {
    num: '1',
    title: 'Envoyez votre demande de devis',
    desc: 'Décrivez votre espace professionnel, la fréquence souhaitée et vos horaires. Notre équipe vous répond sous 24h.',
  },
  {
    num: '2',
    title: 'Nous sélectionnons votre équipe',
    desc: 'On vous assigne une ou plusieurs agentes formées au nettoyage professionnel, disponibles sur vos créneaux, 100% déclarées.',
  },
  {
    num: '3',
    title: 'Contrat, facture, sérénité',
    desc: 'Contrat signé, facturation mensuelle, assurance incluse. Vous gérez tout depuis votre espace entreprise.',
  },
];

/* ════════════════════════════════════════
   STEP CARD (with scroll reveal)
════════════════════════════════════════ */

function StepCard({ step, index, active }: { step: typeof STEPS_PARTICULIERS[0]; index: number; active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }
    // Re-trigger animation when this panel becomes active
    const t = setTimeout(() => setVisible(true), 50 + index * 100);
    return () => clearTimeout(t);
  }, [active, index]);

  return (
    <div
      ref={ref}
      className={`${styles.stepCard} ${visible ? styles.stepCardVisible : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.stepNum}>{step.num}</div>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.desc}</p>
    </div>
  );
}

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */

export default function ServicesPage() {
  const [tab, setTab] = useState<'particuliers' | 'entreprises'>('particuliers');

  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Nos services
          </div>

          <h1 className={styles.heroTitle}>
            Des solutions de ménage<br />
            pour <em>chaque besoin</em>
          </h1>

          <p className={styles.heroSub}>
            Que vous soyez un particulier ou une entreprise, nous vous mettons
            en relation avec des agentes vérifiées, assurées et expérimentées.
          </p>

          {/* Audience cards */}
          <div className={styles.audiences}>
            {AUDIENCES.map((a) => (
              <Link key={a.title} href={a.href} className={styles.audienceCard}>
                <div className={styles.audienceIcon}>{a.icon}</div>
                <div>
                  <div className={styles.audienceTitle}>{a.title}</div>
                  <div className={styles.audienceDesc}>{a.desc}</div>
                </div>
                <span className={styles.audienceArrow}>→</span>
              </Link>
            ))}
          </div>

          {/* Trust bar */}
          <div className={styles.trust}>
            <span className={styles.trustItem}>Agentes vérifiées</span>
            <span className={styles.trustItem}>Assurance incluse</span>
            <span className={styles.trustItem}>Sans engagement</span>
            <span className={styles.trustItem}>Support 6j/7</span>
          </div>
        </div>
      </section>

      {/* ════════════════ STATS ════════════════ */}
      <section className={styles.stats}>
        <div className={styles.statsWrap}>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ STEPS (switcher Particuliers / Entreprises) ════════════════ */}
      <section className={styles.steps}>
        <div className={styles.stepsWrap}>

          <header className={styles.sh}>
            <span className={styles.shTag}>Simple &amp; rapide</span>
            <h2 className={styles.shTitle}>Comment ça marche ?</h2>
            <p className={styles.shSub}>3 étapes simples, adaptées à votre situation.</p>
          </header>

          {/* ── Le switcher demandé : deux "radio" en pills ── */}
          <div className={styles.tabsWrap} role="tablist" aria-label="Choisir un parcours">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'particuliers'}
              className={`${styles.tab} ${tab === 'particuliers' ? styles.tabActive : ''}`}
              onClick={() => setTab('particuliers')}
            >
              Particuliers
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'entreprises'}
              className={`${styles.tab} ${tab === 'entreprises' ? styles.tabActive : ''}`}
              onClick={() => setTab('entreprises')}
            >
              Entreprises
            </button>
          </div>

          {/* Panel Particuliers */}
          <div className={`${styles.panel} ${tab === 'particuliers' ? styles.panelActive : ''} ${styles.stepsGrid}`}>
            {STEPS_PARTICULIERS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} active={tab === 'particuliers'} />
            ))}
          </div>

          {/* Panel Entreprises */}
          <div className={`${styles.panel} ${tab === 'entreprises' ? styles.panelActive : ''} ${styles.stepsGrid}`}>
            {STEPS_ENTREPRISES.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} active={tab === 'entreprises'} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SOLUTIONS ════════════════ */}
      <section className={styles.solutions} id="particuliers">
        <div className={styles.solutionsWrap}>
          <header className={styles.sh}>
            <span className={styles.shTag}>Nos offres</span>
            <h2 className={styles.shTitle}>Une solution pour chaque profil</h2>
          </header>

          <div className={styles.solutionsGrid}>

            {/* Particuliers */}
            <div className={`${styles.solCard} ${styles.solCardPart}`}>
              <div className={styles.solDeco} />
              <span className={styles.solBadge}>Particuliers</span>
              <h3 className={styles.solTitle}>Ménage à domicile</h3>
              <p className={styles.solDesc}>
                Ménage courant, grand ménage, repassage — à la fréquence de
                votre choix, sans engagement.
              </p>
              <div className={styles.solFeatures}>
                <span className={styles.solFeature}>Sans contrat</span>
                <span className={styles.solFeature}>Paiement flexible</span>
                <span className={styles.solFeature}>Agente attitrée</span>
              </div>
              <Link href="/annuaire" className={styles.btnGreen}>
                Voir l&apos;annuaire →
              </Link>
            </div>

            {/* Entreprises */}
            <div className={`${styles.solCard} ${styles.solCardPro}`} id="entreprises">
              <div className={styles.solDeco} />
              <span className={styles.solBadge}>Entreprises</span>
              <h3 className={styles.solTitle}>Nettoyage professionnel</h3>
              <p className={styles.solDesc}>
                Bureaux, commerces, locaux professionnels — équipe dédiée,
                facturation mensuelle, contrat sur-mesure.
              </p>
              <div className={styles.solFeatures}>
                <span className={styles.solFeature}>Facture entreprise</span>
                <span className={styles.solFeature}>Équipe dédiée</span>
                <span className={styles.solFeature}>Assurance incluse</span>
              </div>
              <Link href="/devis" className={styles.btnGold}>
                Demander un devis →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════ CTA FINAL ════════════════ */}
      <section className={styles.ctaFinal}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Prêt à simplifier <em>votre quotidien</em> ?
          </h2>
          <p className={styles.ctaSub}>
            Rejoignez les milliers de clients qui font confiance à
            FemmesDeMenage.Ma chaque semaine.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/annuaire" className={styles.btnWhite}>
              Voir l&apos;annuaire →
            </Link>
            <Link href="/contact" className={styles.btnGhostWhite}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
