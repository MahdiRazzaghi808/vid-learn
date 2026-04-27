import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    AvatarIndicator,
    AvatarStatus,
} from '@repo/main/components/ui/avatar';
import { Badge } from '@repo/main/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@repo/main/components/ui/dropdown-menu';
import { Moon, Sun, Zap, Clock, Target, Users, Building2, User, Settings, Shield, Download, LogOut, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { toAbsoluteUrl } from '@repo/main/utils/toAbsoluteUrl';

export function UserDropdownMenu() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer mb-2.5">
                <Avatar className="size-7">
                    <AvatarImage src={toAbsoluteUrl('/media/avatars/300-2.png')} alt="کاربر" />
                    <AvatarFallback>CH</AvatarFallback>
                    <AvatarIndicator className="-end-2 -top-2">
                        <AvatarStatus variant="online" className="size-2.5" />
                    </AvatarIndicator>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 mb-4" side="right" align="start" sideOffset={11}>
                {/* اطلاعات کاربر */}
                <div className="flex items-center gap-3 px-3 py-2">
                    <Avatar>
                        <AvatarImage src={toAbsoluteUrl('/media/avatars/300-2.png')} alt="کاربر" />
                        <AvatarFallback>CH</AvatarFallback>
                        <AvatarIndicator className="-end-1.5 -top-1.5">
                            <AvatarStatus variant="online" className="size-2.5" />
                        </AvatarIndicator>
                    </Avatar>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold text-foreground">کریس هریس</span>
                        <span className="text-xs text-muted-foreground">توسعه‌دهنده ارشد</span>
                        <Badge variant="success" appearance="outline" size="sm" className="mt-1">پلن حرفه‌ای</Badge>
                    </div>
                </div>

                <DropdownMenuItem className="cursor-pointer py-1 rounded-md border border-border hover:bg-muted">
                    <Clock />
                    <span>تنظیم وضعیت</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* عملیات اصلی */}
                <DropdownMenuItem>
                    <Target />
                    <span>پروژه‌های من</span>
                    <Badge variant="info" size="sm" appearance="outline" className="ms-auto">3</Badge>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Users />
                    <span>تیم</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Building2 />
                    <span>سازمان</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* تنظیمات */}
                <DropdownMenuItem>
                    <User />
                    <span>تنظیمات پروفایل</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Settings />
                    <span>تنظیمات</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <Shield />
                    <span>امنیت</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* حالت تاریک/روشن */}
                <DropdownMenuItem onClick={toggleTheme}>
                    {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
                    <span>{isDarkMode ? 'حالت روشن' : 'حالت تاریک'}</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* ابزار توسعه‌دهنده */}
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Zap />
                        <span>ابزار توسعه</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-48">
                        <DropdownMenuItem>مستندات API</DropdownMenuItem>
                        <DropdownMenuItem>مخزن کد</DropdownMenuItem>
                        <DropdownMenuItem>تست‌ها</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuItem>
                    <Download />
                    <span>دانلود SDK</span>
                    <ExternalLink className="size-3 ms-auto" />
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* خروج */}
                <DropdownMenuItem>
                    <LogOut />
                    <span>خروج</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
