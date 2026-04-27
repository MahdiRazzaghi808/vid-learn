'use client'

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { mergePhone } from "@/utils/phone";
import { NumberInfoResultDto } from "@repo/api/gateway";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/main/components/ui/popover";
import { UserAvatar } from "./user-avatar";
import { UserMenu } from "./user-menu";

type Props = {
    user: NumberInfoResultDto;
};

export function UserPopover({ user }: Props) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const phone = mergePhone(user);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="cursor-pointer flex items-center justify-center">
                    <UserAvatar user={user} size={40} />
                </div>
            </PopoverTrigger>

            <PopoverContent onOpenAutoFocus={e => e.preventDefault()} align="end" sideOffset={8} className="w-72 p-2 text-right space-y-2">
                <div className="flex items-center gap-3 px-3 py-3 bg-muted/50 rounded-xl border border-border/50">
                    <UserAvatar user={user} size={48} />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm">حساب کاربری من</span>
                        <span className="text-xs text-muted-foreground" dir="ltr">
                            {phone}
                        </span>
                    </div>
                </div>

                <UserMenu phone={phone} onClose={() => setOpen(false)} />
            </PopoverContent>
        </Popover>
    );
}
