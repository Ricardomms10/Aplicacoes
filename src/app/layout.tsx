import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.scss';
import Link from 'next/link';
import Footer from '../../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ricardo Malta',
  description: 'App feitas por eu',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,400&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <body className={inter.className}>{children}</body>
    <Footer />
    </>
  );
}
