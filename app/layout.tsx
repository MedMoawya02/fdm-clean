// app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';
import Header from '@/components/Header/Header';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Femmes de Ménage — Services à domicile',
  description:
    'Trouvez une nounou, femme de ménage, cuisinière ou vitrier à Casablanca, Fès, Bouskoura.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
