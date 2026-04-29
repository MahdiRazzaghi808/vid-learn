"use client"

import { Toaster } from "sonner";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from 'next-themes';

export default function ProviderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryProvider>
                <Toaster richColors theme="light" />

                {children}
            </QueryProvider>
            </ThemeProvider>

    );
}
