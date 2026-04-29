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
    { label: "تماس با ما", href: "/contact" },
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
      if (pathname === "/") {
        setIsPastHero(window.scrollY >= window.innerHeight);
      } else {
        setIsPastHero(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      dir="rtl"
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isPastHero ? "bg-background/80 shadow-sm" : "bg-transparent",
        theme === "dark" ? "dark:border-b dark:border-gray-500" : ""
      )}
      
    >
      <div className="mx-auto px-4 lg:px-14 py-4 flex items-center justify-between transparent">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/assets/full-logo.png"
              alt="logo"
              width={100}
              height={100}
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
              <UserPopover user={user} />
            ) : (
              <Button>
                ورود / ثبت‌نام
              </Button>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button
                  className={cn(
                    "rounded-2xl transition-all duration-300",
                    "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                  variant="ghost"
                  size="icon"
                  aria-label="باز کردن منو"
                >
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <Menu className="size-6" />
                  </motion.div>
                </Button>
              </DrawerTrigger>

              <DrawerContent
                className="px-6 pb-6 outline-none border-t-0 rounded-t-[2.5rem] bg-background/80 backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-muted-foreground/20 mb-6" />
                <DrawerTitle className="sr-only">منوی ناوبری</DrawerTitle>

                <div className="flex flex-col h-full overflow-y-auto">
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Button
                          asChild
                          variant="ghost"
                          className={cn(
                            "w-full justify-start text-base rounded-xl h-12 transition-all",
                            isActiveItem(item.href)
                              ? "bg-primary/15 text-primary font-bold shadow-sm"
                              : "hover:bg-primary/5 text-foreground/80 hover:text-primary font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </Button>
                      </motion.div>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6"
                  />

                  <motion.div
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {user ? (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="user-menu" className="border-none bg-muted/30 rounded-2xl p-1">
                          <AccordionTrigger className="hover:no-underline px-4 py-3 rounded-xl hover:bg-background shadow-sm transition-all">
                            <div className="flex items-center gap-4 text-right">
                              <div className="ring-2 ring-primary/20 rounded-full p-0.5">
                                <UserAvatar user={user} size={44} />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-bold text-sm text-foreground">حساب کاربری من</span>
                                <span className="text-xs text-muted-foreground mt-0.5 font-medium" dir="ltr">
                                  {userIdentifier}
                                </span>
                              </div>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pt-3 px-2 space-y-1">
                            <UserMenu phone={userIdentifier} onClose={() => setIsOpen(false)} />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <div className="w-full pt-2">
                        <Button className="w-full rounded-xl h-12 text-base font-bold bg-gradient-to-l from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/25 transition-all">
                          ورود / ثبت‌نام
                        </Button>
                      </div>
                    )}
                  </motion.div>
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
