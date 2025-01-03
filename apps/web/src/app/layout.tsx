import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import FormProvider from '@/contexts/FormContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Form Website',
  description: 'A Responsive Form Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
