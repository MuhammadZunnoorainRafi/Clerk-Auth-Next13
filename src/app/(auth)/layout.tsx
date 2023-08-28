import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
export const metadata: Metadata = {
  title: 'Chat-App',
  description: 'Chat-App by Muhammad Zunnoorain Rafi',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          <main className="min-h-screen  flex items-center justify-center">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
