'use client';

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/main/components/ui/accordion";
import { Button } from "@repo/main/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/main/components/ui/drawer";

import { useCurrentUser } from "@/utils/current-user";
import { mergePhone } from "@/utils/phone";
import { cn } from "@repo/main/utils/cn";

import { UserPopover } from "./user-popover";
import { UserAvatar } from "./user-popover/user-avatar";
import { UserMenu } from "./user-popover/user-menu";

const Header = () => {
  const navItems = [
    { label: "خانه", href: "/" },
    { label: "دوره‌ها", href: "/courses" },
    { label: "مقالات", href: "/blog" },
    { label: "سوالات متداول", href: "/faq" },
    { label: "درباره ما", href: "/about-us" },
  ];

  const pathname = usePathname();
  const { data: user } = useCurrentUser();

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  const isActiveItem = (href: string) => pathname === href;
  const userIdentifier = user ? mergePhone(user) : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      dir="rtl"
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
        isPastHero ? `bg-background/80 shadow-sm  ${theme === "dark" ? "border-b border-gray-500" : ""}` : "bg-transparent",

      )}

    >
      <div className="mx-auto px-4 lg:px-14 py-4 flex items-center justify-between transparent">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/assets/full-logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className={cn(
                    "cursor-pointer transition-colors relative group text-muted-foreground",
                    isActiveItem(item.href)
                      ? "text-primary font-medium" : " hover:text-primary"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 right-0 h-0.5 bg-primary transition-all rounded-full",
                      isActiveItem(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </motion.span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {mounted ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "rounded-2xl transition-all duration-300",
                "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)]"
              )}
              aria-label="تغییر تم"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {theme === "dark" ? <Sun className="size-5.5 text-amber-500" /> : <Moon className="size-5.5 text-indigo-500" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          ) : (
            <div className="w-10 h-10" />
          )}

          <div className="hidden lg:flex items-center">
            {!user ? (
              <UserPopover user={{
                photoPath:"",
                title:"مهدی"
              }} />
            ) : (
              <Button>
                ورود / ثبت‌نام
              </Button>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <Drawer open={isOpen} onOpenChange={setIsOpen} >
              <DrawerTrigger asChild>
                <Button
                  className="text-muted-foreground hover:bg-muted hover:text-foreground"
                  variant="ghost"
                  size="icon"
                  aria-label="باز کردن منو"
                >
                  <Menu className="size-6" />
                </Button>
              </DrawerTrigger>

              <DrawerContent
                className="px-6 pb-4 outline-none border-none"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <DrawerTitle className="sr-only">منوی ناوبری</DrawerTitle>

                <div className="flex flex-col h-full overflow-y-auto mt-6">
                  <nav className="flex flex-col space-y-1.5">
                    {navItems.map((item) => (
                      <Button
                        key={item.href}
                        asChild
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-base",
                          isActiveItem(item.href)
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                    ))}
                  </nav>

                  <div className="h-px bg-border my-4" />

                  <div className="flex flex-col">
                    {user ? (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="user-menu" className="border-none">
                          <AccordionTrigger className="hover:no-underline px-3 rounded-xl hover:bg-muted/50">
                            <div className="flex items-center gap-3 text-right">
                              <UserAvatar user={user} size={48} />

                              <div className="flex flex-col">
                                <span className="font-semibold text-sm">
                                  حساب کاربری من
                                </span>
                                <span
                                  className="text-xs text-muted-foreground"
                                  dir="ltr"
                                >
                                  {userIdentifier}
                                </span>
                              </div>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pt-2 px-1 space-y-1">
                            <UserMenu
                              phone={userIdentifier}
                              onClose={() => setIsOpen(false)}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <div className="w-full pt-2">
                        <Button>
                          ورود / ثبت‌نام
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
