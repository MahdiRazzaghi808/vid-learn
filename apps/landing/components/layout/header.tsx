'use client';

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@repo/main/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/main/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/main/components/ui/accordion";

import { cn } from "@repo/main/utils/cn";
import { useCurrentUser } from "@/utils/current-user";
import { mergePhone } from "@/utils/phone";

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

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActiveItem = (href: string) => pathname === href;

  const userIdentifier = user ? mergePhone(user) : "";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
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
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/60 backdrop-blur-md",
        isScrolled && "shadow-sm border-b border-border/50"
      )}
    >
      <div className="mx-auto px-4 lg:px-14 py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src="/assets/full-logo.svg"
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
                    "cursor-pointer transition-colors relative group",
                    isActiveItem(item.href)
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary"
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

        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center">
            {!user ? (
              <UserPopover user={user} />
            ) : (
              <Button>ورود / ثبت‌نام</Button>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
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
                className="px-6 pb-4 outline-none"
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
                        <Button className="w-full">ورود / ثبت‌نام</Button>
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
