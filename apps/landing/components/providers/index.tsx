"use client"

import { Toaster } from "sonner";
import { QueryProvider } from "./query-provider";

export default function ProviderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <QueryProvider>
                <Toaster richColors theme="light" />

                {children}
            </QueryProvider>
        </>

    );
}
