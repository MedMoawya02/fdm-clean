import Link from 'next/link';
import { AGENTS } from '@/data/agents';
import AgentProfile from './AgentProfile';
import styles from './profil.module.css';

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export function generateStaticParams() {
  return AGENTS.map((a) => ({ id: String(a.id) }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolved = await params;
  const agent = AGENTS.find((a) => a.id === Number(resolved.id));
  if (!agent) return { title: 'Profil introuvable' };
  return {
    title: `${agent.prenom} — ${agent.ville} | Femmes de Ménage`,
    description: agent.desc,
  };
}

export default async function AgentProfilePage({ params }: PageProps) {
  const resolved = await params;
  const agent = AGENTS.find((a) => a.id === Number(resolved.id));

  if (!agent) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>🔍</div>
        <h1 className={styles.notFoundTitle}>Profil introuvable</h1>
        <p className={styles.notFoundText}>
          Cette agente n&apos;existe pas ou n&apos;est plus disponible.
        </p>
        <Link href="/annuaire" className={styles.notFoundBtn}>
          Retour à l&apos;annuaire
        </Link>
      </div>
    );
  }

  return <AgentProfile agent={agent} />;
}