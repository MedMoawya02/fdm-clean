'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
const WHY_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="18" r="9" stroke="#2e7d32" strokeWidth="2.5" />
        <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M32 22l3 3 6-6" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Intervenantes expertes et sélectionnées',
    desc: "Toutes nos agentes bénéficient d'une expérience vérifiée en ménage à domicile, faisant d'elles de véritables professionnelles du foyer.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6L8 13v12c0 9.4 6.8 18.2 16 20.4C33.2 43.2 40 34.4 40 25V13L24 6z" stroke="#2e7d32" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M17 24l5 5 9-9" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Intervenantes déclarées et assurées',
    desc: "En faisant appel à nos expertes du nettoyage, vous luttez contre le travail non déclaré et bénéficiez d'une assurance dommages complète.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="10" width="32" height="30" rx="4" stroke="#2e7d32" strokeWidth="2.5" />
        <path d="M8 18h32" stroke="#2e7d32" strokeWidth="2.5" />
        <path d="M16 6v8M32 6v8" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M17 27l4 4 10-8" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sans engagement ni démarche administrative',
    desc: 'Réservez ou annulez vos prestations en quelques clics. Aucun contrat à signer, aucune paperasse — tout se gère en ligne.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="26" r="14" stroke="#2e7d32" strokeWidth="2.5" />
        <path d="M18 22c1.5-3 7.5-3 9 0" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 32c2 4 16 4 18 0" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="27" r="2" fill="#2e7d32" />
        <circle cx="29" cy="27" r="2" fill="#2e7d32" />
        <path d="M21 12V8M27 12V8" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Chargé de clientèle dédié 6j/7',
    desc: 'Notre Service Client est disponible du lundi au samedi par email ou par téléphone pour répondre à toutes vos questions.',
  },
];
function WhyItem({ item, index }: { item: typeof WHY_ITEMS[0]; index: number }) {
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
      className={`${styles.whyItem} ${visible ? styles.whyItemVisible : ''}`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <div className={styles.whyIconWrap}>
        {item.icon}
      </div>
      <div className={styles.whyContent}>
        <h3 className={styles.whyTitle}>{item.title}</h3>
        <p className={styles.whyDesc}>{item.desc}</p>
      </div>
    </div>
  );
}

const HOW_STEPS = [
  {
    num: '1',
    icon: '📋',
    title: 'Nous contacter',
    sub: 'Choisissez la date, l\'heure et le type de ménage',
    desc: 'Réservez en ligne en moins de 2 minutes via notre formulaire sécurisé.',
  },
  {
    num: '2',
    icon: '✅',
    title: 'Confirmation',
    sub: 'Un conseiller vous contacte rapidement',
    desc: 'Nous validons vos besoins et vous attribuons l\'agente la plus adaptée.',
  },
  {
    num: '3',
    icon: '🏠',
    title: 'Intervention',
    sub: 'Votre domicile est nettoyé selon vos instructions',
    desc: 'Nos intervenantes déclarées et assurées respectent vos consignes à la lettre.',
  },
  {
    num: '4',
    icon: '⭐',
    title: 'Suivi & Satisfaction',
    sub: 'Nous vérifions votre satisfaction',
    desc: 'Service client dédié et possibilité de planifier vos prochains ménages.',
  },
];

function HowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
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
    <section className={styles.howSection}>
      <div className={styles.howInner} ref={ref}>

        {/* Title */}
        <div className={styles.howHeader}>
          <h2 className={styles.howTitle}>
            Comment ça <span className={styles.howTitleMark}>marche ?</span>
          </h2>
          <p className={styles.howSubtitle}>
            Réservez votre aide à domicile en 4 étapes simples
          </p>
        </div>

        {/* Steps */}
        <div className={styles.howStepsWrap}>
          {/* Connector line */}
          <div className={styles.howConnector}>
            <div
              ref={lineRef}
              className={`${styles.howConnectorFill} ${visible ? styles.howConnectorFillVisible : ''}`}
            />
          </div>

          <div className={styles.howSteps}>
            {HOW_STEPS.map((step, i) => (
              <div
                key={i}
                className={`${styles.howStep} ${visible ? styles.howStepVisible : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={styles.howNum}>
                  <span className={styles.howNumText}>{step.num}</span>
                </div>
                <div className={styles.howCard}>
                  <span className={styles.howCardIcon}>{step.icon}</span>
                  <div className={styles.howCardTitle}>{step.title}</div>
                  <div className={styles.howCardSub}>{step.sub}</div>
                  <p className={styles.howCardDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.howCta}>
          <p className={styles.howCtaText}>Prêt à réserver votre première intervention ?</p>
          <Link href="/inscription" className={styles.howCtaBtn}>
            Réserver maintenant
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M8 3l5 5-5 5"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section className={styles.hero}>

        {/* LEFT */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Des Services de<br />
            Ménage Impeccables,<br />
            Résultats Garantis.
          </h1>

          <p className={styles.heroSubtitle}>
            Des solutions personnalisées pour votre maison — portées par des
            agentes vérifiées, fiables et expérimentées à Casablanca, Fès et
            Bouskoura.
          </p>

          <div className={styles.heroCta}>
            <Link href="/reservation" className={styles.btnPrimary}>
              Réserver en ligne
            </Link>
            <Link href="/annuaire" className={styles.btnSecondary}>
              Voir l&apos;annuaire
            </Link>
          </div>

          {/* Testimonial */}
          {/* <div className={styles.testimonial}>
            <p className={styles.testimonialText}>
              <strong>Femmes de Ménage a été un vrai coup de cœur.</strong>{' '}
              Fatima est ponctuelle, soigneuse et discrète. Je la recommande
              à toutes mes amies.{' '}
              <strong>Vraiment irréprochable&nbsp;!</strong>
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>👩</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>— Nadia El Fassi</span>
                <span className={styles.authorSince}>Cliente depuis 2 ans</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* RIGHT */}
        <div className={styles.heroRight}>
          {/* Badge 10 000+ */}
          <div className={styles.badge}>
            <div className={styles.badgeNumber}>
              10 000+
              <span className={styles.badgeArrow}>↗</span>
            </div>
            <div className={styles.badgeLabel}>Clients satisfaits</div>
            <div className={styles.badgeAvatars}>
              {['👩', '👨', '👩', '👦', '👩'].map((em, i) => (
                <div key={i} className={styles.badgeAvatarItem}>{em}</div>
              ))}
            </div>
          </div>

          {/* Woman SVG */}
          <div className={styles.womanSvgWrap}>
            <Image
              src="/pack-produits-nettoyage-surfaces.png"
              alt="Femme de ménage"
              width={420}
              height={580}
            />
          </div>
        </div>
      </section>

      {/* ════════════════ WHY SECTION ════════════════ */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>

          {/* Header */}
          <div className={styles.whyHeader}>
            <h2 className={styles.whySectionTitle}>
              Pourquoi réserver votre ménage avec
            </h2>
            <span className={styles.whySectionBrand}>FemmesDeMenage.Ma</span>
          </div>

          {/* Divider */}
          <div className={styles.whyDivider} />

          {/* Items */}
          <div className={styles.whyList}>
            {WHY_ITEMS.map((item, i) => (
              <WhyItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* ════════════════ HOW IT WORKS ════════════════ */}
      <HowSection />
    </>
  );
}
