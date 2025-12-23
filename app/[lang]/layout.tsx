import { ReactNode } from 'react';
import '../globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // await params في Next.js 15+
  const { lang } = await params;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}