'use client';

import { useMemo, useState } from 'react';
import { AGENTS } from '@/data/agents';
import { Filters, SortOption } from '@/types';
import HeroSearch from '@/components/HeroSearch/HeroSearch';
import Sidebar from '@/components/Sidebar/Sidebar';
import AgentCard from '@/components/AgentCard/AgentCard';
import Pagination from '@/components/Pagination/Pagination';
import styles from './annuaire.module.css';

const PER_PAGE = 9;

const DEFAULT_FILTERS: Filters = {
  ville:    '',
  metier:   '',
  dispo:    '',
  sleeping: '',
  exp:      0,
  rating:   0,
  verified: '',
  tags:     [],
};

export default function AnnuairePage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [sort, setSort]       = useState<SortOption>('rating');
  const [page, setPage]       = useState(1);

  const filtered = useMemo(() => {
    const f = filters;
    return AGENTS.filter((a) => {
      if (f.ville    && a.ville    !== f.ville)                           return false;
      if (f.metier   && a.metier   !== f.metier)                          return false;
      if (f.dispo    && a.status   !== f.dispo)                           return false;
      if (f.sleeping === 'oui' && !a.couchante)                           return false;
      if (f.sleeping === 'non' &&  a.couchante)                           return false;
      if (f.exp      && a.experience < f.exp)                             return false;
      if (f.rating   && a.rating    < f.rating)                           return false;
      if (f.verified && !a.verified)                                      return false;
      if (f.tags.length && !f.tags.every((t) => a.langues.includes(t)))   return false;
      return true;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sort === 'rating')     return b.rating     - a.rating;
      if (sort === 'exp')        return b.experience - a.experience;
      if (sort === 'price-asc')  return a.prix_jour  - b.prix_jour;
      if (sort === 'price-desc') return b.prix_jour  - a.prix_jour;
      return 0;
    });
  }, [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = sorted.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const handleFiltersChange = (next: Filters) => {
    setFilters(next);
    setPage(1);
  };

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS);
    setPage(1);
  };

  return (
    <>
      <HeroSearch
        ville={filters.ville}
        metier={filters.metier}
        onVilleChange={(v) => handleFiltersChange({ ...filters, ville: v })}
        onMetierChange={(v) => handleFiltersChange({ ...filters, metier: v })}
      />

      <div className={styles.pageBody}>
        <Sidebar
          filters={filters}
          onChange={handleFiltersChange}
          onReset={handleReset}
        />

        <main>
          <div className={styles.mainHeader}>
            <div className={styles.resultCount}>
              <strong>{sorted.length}</strong>{' '}
              agente{sorted.length !== 1 ? 's' : ''} trouvée{sorted.length !== 1 ? 's' : ''}
            </div>

            <div className={styles.sortWrap}>
              Trier par
              <select
                className={styles.sortSelect}
                value={sort}
                onChange={(e) => { setSort(e.target.value as SortOption); setPage(1); }}
              >
                <option value="rating">Note ↓</option>
                <option value="exp">Expérience ↓</option>
                <option value="price-asc">Prix ↑</option>
                <option value="price-desc">Prix ↓</option>
              </select>
            </div>
          </div>

          <div className={styles.agentGrid}>
            {pageItems.length > 0 ? (
              pageItems.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))
            ) : (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3>Aucun résultat</h3>
                <p>Essayez d&apos;élargir vos filtres</p>
              </div>
            )}
          </div>

          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => {
              setPage(p);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      </div>
    </>
  );
}
