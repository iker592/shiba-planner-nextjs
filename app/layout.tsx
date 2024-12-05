import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Our Peñíscola Adventure',
  description: 'A special day trip planned just for you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}