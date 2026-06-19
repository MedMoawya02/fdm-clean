'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './a-propos.module.css';

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */

const VALUES = [
  {
    icon: '🛡️',
    title: 'Confiance',
    desc: 'Chaque agente est vérifiée, déclarée et assurée avant de rejoindre la plateforme.',
  },
  {
    icon: '❤️',
    title: 'Bienveillance',
    desc: "Nous traitons chaque agente et chaque client avec respect et considération.",
  },
  {
    icon: '⚡',
    title: 'Simplicité',
    desc: 'Réservez, gérez et payez en quelques clics, sans paperasse ni complications.',
  },
  {
    icon: '🎯',
    title: 'Exigence',
    desc: "Nous sélectionnons rigoureusement nos intervenantes pour un service irréprochable.",
  },
];

const STATS = [
  { value: '10 000+', label: 'Clients satisfaits' },
  { value: '500+',    label: 'Agentes vérifiées' },
  { value: '4.9 / 5',  label: 'Note moyenne' },
  { value: '3',        label: 'Villes couvertes' },
];

const TEAM = [
  { emoji: '👩‍💼', name: 'Salma Bennani', role: 'Fondatrice & CEO' },
  { emoji: '👨‍💻', name: 'Yassine Amrani', role: 'CTO' },
  { emoji: '👩‍🔧', name: 'Imane Cherkaoui', role: 'Responsable Qualité' },
  { emoji: '🧑‍💼', name: 'Omar Lahlou', role: 'Service Client' },
];

/* ════════════════════════════════════════
   ANIMATED VALUE CARD
════════════════════════════════════════ */

function ValueCard({ value, index }: { value: typeof VALUES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.valueCard} ${visible ? styles.valueCardVisible : ''}`}
      style={{ transitionDelay: `${index * 100}ms`, transitionProperty: 'opacity, transform' , transitionDuration: '.55s', transitionTimingFunction: 'ease' }}
    >
      <div className={styles.valueIcon}>{value.icon}</div>
      <h3 className={styles.valueTitle}>{value.title}</h3>
      <p className={styles.valueDesc}>{value.desc}</p>
    </div>
  );
}

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */

export default function AProposPage() {
  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Notre histoire
          </div>

          <h1 className={styles.heroTitle}>
            Nous simplifions<br />
            <em>le quotidien</em> des foyers marocains
          </h1>

          <p className={styles.heroSub}>
            FemmesDeMenage.Ma connecte les familles et les entreprises à des
            agentes de confiance, vérifiées et passionnées par leur métier.
          </p>
        </div>
      </section>

      {/* ════════════════ STORY ════════════════ */}
      <section className={styles.story}>
        <div className={styles.storyWrap}>
          <div className={styles.storyText}>
            <span className={styles.shTag}>Notre mission</span>
            <h2 className={styles.storyTitle}>
              Donner de la valeur à un métier essentiel
            </h2>
            <p className={styles.storyP}>
              Née à Casablanca, <strong>FemmesDeMenage.Ma</strong> est partie
              d&apos;un constat simple : trouver une aide à domicile fiable
              relève souvent du bouche-à-oreille, sans aucune garantie.
            </p>
            <p className={styles.storyP}>
              Nous avons construit une plateforme qui <strong>protège les deux
              parties</strong> — des clients rassurés par des profils vérifiés,
              et des intervenantes reconnues, déclarées et justement
              rémunérées pour leur travail.
            </p>
            <p className={styles.storyP}>
              Aujourd&apos;hui, nous accompagnons des milliers de familles et
              d&apos;entreprises à Casablanca, Fès et Bouskoura, avec une
              exigence constante de qualité et de confiance.
            </p>
          </div>

          <div className={styles.storyVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualDeco} />
              <span className={styles.visualEmoji}>🌿</span>
              <p className={styles.visualQuote}>
                &laquo; Un métier respecté,<br />un service de confiance. &raquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ VALUES ════════════════ */}
      <section className={styles.values}>
        <div className={styles.valuesWrap}>
          <header className={styles.sh}>
            <span className={styles.shTag}>Nos valeurs</span>
            <h2 className={styles.shTitle}>Ce qui nous guide chaque jour</h2>
            <p className={styles.shSub}>
              Quatre principes qui façonnent notre service, du premier
              contact jusqu&apos;à la dernière prestation.
            </p>
          </header>

          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ STATS BAND ════════════════ */}
      <section className={styles.statsBand}>
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

      {/* ════════════════ TEAM ════════════════ */}
      <section className={styles.team}>
        <div className={styles.teamWrap}>
          <header className={styles.sh}>
            <span className={styles.shTag}>L&apos;équipe</span>
            <h2 className={styles.shTitle}>Les personnes derrière le projet</h2>
          </header>

          <div className={styles.teamGrid}>
            {TEAM.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.emoji}</div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamRole}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA FINAL ════════════════ */}
      <section className={styles.ctaFinal}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Rejoignez <em>l&apos;aventure</em>
          </h2>
          <p className={styles.ctaSub}>
            Que vous cherchiez une aide à domicile ou souhaitiez rejoindre
            notre réseau d&apos;agentes, nous sommes là pour vous.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/annuaire" className={styles.btnWhite}>
              Voir l&apos;annuaire →
            </Link>
            <Link href="/inscription" className={styles.btnGhostWhite}>
              Devenir agente
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
