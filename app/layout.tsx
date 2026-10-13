import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syed Golam Moktadir (Sakif) | Portfolio',
  description: 'Full-Stack Software Engineer building responsive, end-to-end web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
