
export const metadata = {
  title: 'Dr. Leonardo Lima | Defesa Criminal Imediata',
  description:
    'Advogado criminalista OAB/BA 87995. Atuação em flagrantes, audiências de custódia no TJBA e defesa penal estratégica com tecnologia.',
  keywords: [
    'advogado criminal',
    'defesa criminal',
    'flagrante',
    'audiência de custódia',
    'advogado penal',
    'criminalista Bahia',
    'Leonardo Lima',
  ],
  authors: [{ name: 'Dr. Leonardo Lima', url: 'https://leolima.adv.br' }],
  creator: 'Dr. Leonardo Lima',
  publisher: 'Dr. Leonardo Lima',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://leolima.adv.br/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://leolima.adv.br/',
    title: 'Defesa Criminal Imediata — Dr. Leonardo Lima',
    description:
      'Atuação exclusiva em Direito Penal. Flagrantes, audiências de custódia e defesa estratégica. Atendimento 24h.',
    siteName: 'Dr. Leonardo Lima',
    images: [
      {
        url: 'https://leolima.adv.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Leonardo Lima — Defesa Criminal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Defesa Criminal Imediata — Dr. Leonardo Lima',
    description:
      'Advogado criminalista OAB/BA 87995. Estratégia moderna e atendimento 24h.',
    images: ['https://leolima.adv.br/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'Legal',
};

import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  return <HomeClient />;
}