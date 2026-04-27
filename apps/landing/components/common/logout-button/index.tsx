"use client";

import React, { useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@repo/main/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@repo/main/components/ui/dialog";
// import { useAuth } from "@/store/AuthContext";

export default function LogoutButton({ className = "" }: { className?: string }) {
    // const { logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        setLoading(true);
        // await logout();
        setLoading(false);
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="destructive"
                className={className}
                onClick={() => setOpen(true)}
                disabled={loading}
            >
                <LogOut className="ml-2 size-5" />
                خروج
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>خروج از حساب</DialogTitle>
                    </DialogHeader>
                    <p className="text-sm text-muted-foreground">آیا از خروج مطمئن هستید؟</p>
                    <DialogFooter className="flex justify-end gap-2 mt-4">
                        <Button variant="ghost" onClick={() => setOpen(false)}>
                            خیر
                        </Button>
                        <Button variant="destructive" onClick={handleConfirm} disabled={loading}>
                            بله، خروج
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
