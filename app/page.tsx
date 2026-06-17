// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
export default function HomePage() {
  return (
    <section className={styles.hero}>

      {/* ── LEFT ── */}
      <div className={styles.heroLeft}>

        <h1 className={styles.heroTitle}>
          Des Services de<br />
          Ménage Impeccables,<br />
          Résultats Garantis.
        </h1>

        <p className={styles.heroSubtitle}>
          Des solutions personnalisées pour votre maison ou entreprise — portées par des
          agentes vérifiées, fiables et expérimentées à Casablanca, Fès et
          Bouskoura.
        </p>

        <div className={styles.heroCta}>
          <Link href="/inscription" className={styles.btnPrimary}>
            Inscription gratuite
          </Link>
          <Link href="/annuaire" className={styles.btnSecondary}>
            Voir l&apos;annuaire
          </Link>
        </div>

        {/* Testimonial */}
        <div className={styles.testimonial}>
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
        </div>
      </div>

      {/* ── RIGHT ── */}
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

        {/* svg image */}
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
  );
}
