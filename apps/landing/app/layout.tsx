import '@repo/main/styles.css';
import type { Metadata } from "next";
import Header from '../components/layout/header';
import "./globals.css";
import ProviderLayout from '../components/providers';

export const metadata: Metadata = {
  title: "ویدلرن",
  description: "به زودی...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-background text-foreground">
        <ProviderLayout>
          <Header />
          {children}
          {/* <Footer /> */}
        </ProviderLayout>
      </body>
    </html>
  );
}
