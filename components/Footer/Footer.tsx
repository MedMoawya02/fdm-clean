// components/Footer/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/femmesdemenage.ma',
    className: styles.facebook,
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/femmesdemenage.ma',
    className: styles.instagram,
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/femmesdemenage-ma',
    className: styles.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const NAV_LINKS = {
  Services: [
    { label: 'Femme de ménage', href: '/annuaire?metier=fdm' },
    { label: 'Nounou',          href: '/annuaire?metier=nounou' },
    { label: 'Cuisinière',      href: '/annuaire?metier=cuisiniere' },
    { label: 'Vitrier',         href: '/annuaire?metier=vitrier' },
  ],
  Entreprise: [
    { label: 'À propos',        href: '/a-propos' },
    { label: 'Comment ça marche', href: '/services' },
    { label: 'Témoignages',     href: '/#temoignages' },
    { label: 'Contact',         href: '/contact' },
  ],
  Légal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité',  href: '/confidentialite' },
    { label: 'CGU',              href: '/cgu' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* ── Top grid ── */}
        <div className={styles.top}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMark}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z"
                    fill="rgba(255,255,255,0.15)"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M9 21v-6a3 3 0 016 0v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M15.5 8.5 Q17 5.5 19 7 Q17.5 9.5 15.5 8.5Z" fill="white" opacity=".9"/>
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>
                  Femmes de <em>Ménage</em>
                </span>
                <span className={styles.logoTagline}>Services à domicile</span>
              </div>
            </Link>

            <p className={styles.brandDesc}>
              La plateforme de référence au Maroc pour trouver une aide à
              domicile vérifiée — femme de ménage, nounou, cuisinière ou
              vitrier à Casablanca, Fès et Bouskoura.
            </p>

            {/* Social links */}
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`${styles.socialLink} ${s.className}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(NAV_LINKS).map(([title, links]) => (
            <div key={title} className={styles.col}>
              <div className={styles.colTitle}>{title}</div>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className={styles.colLink}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} <strong>FemmesDeMenage.Ma</strong> — Tous droits réservés.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/mentions-legales" className={styles.bottomLink}>
              Mentions légales
            </Link>
            <Link href="/confidentialite" className={styles.bottomLink}>
              Confidentialité
            </Link>
            <Link href="/cgu" className={styles.bottomLink}>
              CGU
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
