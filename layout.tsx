import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Бросай - Счетчик дней',
  description: 'Telegram мини-апп для подсчета дней',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Days+One&family=Holtwood+One+SC&display=swap" 
          rel="stylesheet" 
        />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
