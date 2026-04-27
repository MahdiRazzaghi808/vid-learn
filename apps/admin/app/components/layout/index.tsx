"use client";
// import type { Metadata } from "next";
import { ScreenLoader } from "@repo/main/common/screen-loader/index";
import { Layout20 } from "@repo/main/components/layout-20/index";
import '@repo/main/styles.css';
import { useEffect, useState } from "react";
import { HeaderTitle } from './header-title';
import { menuSidebar } from './layout-20.config';

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

// export const metadata: Metadata = {
//   title: "پنل آموزش",
//   description: "پنل مدیریت دوره‌ها، محتوای آموزشی و پیشرفت کاربران در سایت آموزشی",
// };


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate short loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 second loading time

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <ScreenLoader />;
    }

    return (
        <html lang="fa" dir="rtl">
            <body className="text-white bg-background">
                <Layout20 HeaderTitle={<HeaderTitle
                    items={[
                        { title: "خانه", href: "/" },
                        { title: "حساب کاربری", href: "/account" },
                        { title: "به‌روزرسانی‌ها" } // صفحه فعلی بدون href
                    ]}
                />
                } menuSidebar={menuSidebar}>
                    {children}
                </Layout20>
            </body>
        </html>
    );
}
