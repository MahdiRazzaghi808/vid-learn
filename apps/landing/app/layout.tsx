import '@repo/main/styles.css';
import type { Metadata } from "next";
import ProviderLayout from '../components/providers';
import "./globals.css";

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
          {children}
        </ProviderLayout>
      </body>
    </html>
  );
}
