import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function RootLayout({ children }) {
 return <html lang="fr"><body>
 <nav className="nav">
 <Link href="/">Accueil</Link><Link href="/guides">Guides</Link><Link href="/news">Actualités</Link><Link href="/admin">Admin</Link>
 </nav>
 <main className="container">{children}</main>
 <Analytics /><SpeedInsights />
 </body></html>;
}