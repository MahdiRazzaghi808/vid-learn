import type { Metadata } from "next";
import '@repo/main/styles.css';
import MainLayout from './components/layout';
import "./globals.css"
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

export const metadata: Metadata = {
  title: "ادمین",
  description: "به زودی...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="fa" dir="rtl">
      <body className="">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
