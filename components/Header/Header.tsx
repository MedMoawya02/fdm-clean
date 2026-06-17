'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/',         label: 'Accueil'  },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* ── Logo ── */}
        <Link href="/" className={styles.logo} aria-label="Femmes de Ménage — Accueil">
          <div className={styles.logoMark}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"
                fill="rgba(255,255,255,0.15)"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 21v-6a3 3 0 016 0v6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15.5 8.5 Q17 5.5 19 7 Q17.5 9.5 15.5 8.5Z"
                fill="white"
                opacity=".9"
              />
            </svg>
          </div>
          <div className={styles.logoWordmark}>
            <span className={styles.logoTop}>
              Femmes de <em>Ménage</em>
            </span>
            <span className={styles.logoSub}>Services à domicile</span>
          </div>
        </Link>

        {/* ── Navigation desktop ── */}
        <nav className={styles.nav} aria-label="Navigation principale">
          {NAV_LINKS.map((link, i) => (
            <div key={link.href} style={{ display: 'contents' }}>
              {/* Séparateur avant "À propos" */}
              {i === NAV_LINKS.length - 1 && (
                <div className={styles.navSeparator} role="separator" />
              )}
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.navLinkActive : ''
                }`}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* ── Boutons CTA ── */}
        <div className={styles.cta}>
          <Link href="/connexion" className={styles.btnLogin}>
            Se connecter
          </Link>
          <Link href="/inscription" className={styles.btnInscrit}>
            Inscription
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>
        </div>

        {/* ── Hamburger mobile ── */}
        <button
          className={styles.hamburger}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Menu mobile ── */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Menu mobile"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${
              pathname === link.href ? styles.navLinkActive : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <div className={styles.mobileDivider} />

        <div className={styles.mobileCta}>
          <Link
            href="/connexion"
            className={styles.btnLogin}
            onClick={() => setMenuOpen(false)}
          >
            Se connecter
          </Link>
          <Link
            href="/inscription"
            className={styles.btnInscrit}
            onClick={() => setMenuOpen(false)}
          >
            Inscription →
          </Link>
        </div>
      </div>
    </header>
  );
}
