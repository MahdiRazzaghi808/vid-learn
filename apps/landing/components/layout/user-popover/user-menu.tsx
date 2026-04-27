'use client'

import { Bookmark, LayoutDashboard, LogOut, Route } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/main/components/ui/button";
import LogoutButton from "../../common/logout-button";
// import { AuthProvider } from "@/store/AuthContext";

type Props = {
  phone: string;
  onClose?: () => void;
};

export function UserMenu({ phone, onClose }: Props) {
  return (
    // <AuthProvider>
    <>
      <Button
        asChild
        variant="ghost"
        className="w-full justify-start text-muted-foreground hover:text-foreground"
        onClick={onClose}
      >
        <Link href={`/${phone}/dashboard`}>
          <LayoutDashboard className="ml-3 size-5" />
          داشبورد
        </Link>
      </Button>

      <Button
        asChild
        variant="ghost"
        className="w-full justify-start text-muted-foreground hover:text-foreground"
        onClick={onClose}
      >
        <Link href={`/${phone}/root`}>
          <Route className="ml-3 size-5" />
          مسیر ثبت نام
        </Link>
      </Button>

      <Button
        asChild
        variant="ghost"
        className="w-full justify-start text-muted-foreground hover:text-foreground"
        onClick={onClose}
      >
        <Link href={`/${phone}/save`}>
          <Bookmark className="ml-3 size-5" />
          ذخیره ها
        </Link>
      </Button>

      <LogoutButton className="w-full justify-center mt-3"/>

    </>
  );
}
