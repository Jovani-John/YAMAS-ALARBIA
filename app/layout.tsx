import type { Metadata } from 'next';
import { Alexandria } from 'next/font/google';
import './globals.css';

const alexandria = Alexandria({
  subsets: ['latin', 'arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'يماس العربية للمقاولات | Yamas Construction',
  description: 'شركة يماس العربية للمقاولات - متخصصون في مشاريع الإسكان والبنية التحتية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={alexandria.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}