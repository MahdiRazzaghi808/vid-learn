import { Button } from '@repo/main/components/ui/button';
import { ScrollArea } from '@repo/main/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/main/components/ui/tooltip';
import { cn } from '@repo/main/utils/cn';
import { Globe, LayoutGrid, Mails, NotepadText, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { UserDropdownMenu } from './user-dropdown-menu';

// ────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────
type MenuItem = {
  icon: React.ElementType;
  tooltip: string;
  path: string;
  rootPath: string;
};

// ────────────────────────────────────────────────
// Constants & Config
// ────────────────────────────────────────────────
const isDevOrLocal =
  process.env.NODE_ENV === 'development' ||
  (typeof window !== 'undefined' && window.location.hostname.includes('localhost'));

const MAIN_SITE = isDevOrLocal
  ? 'http://localhost:3000'
  : 'https://monorepo-landing-virid.vercel.app/';

const ADMIN_PANEL = isDevOrLocal
  ? 'http://localhost:3001/'
  : 'https://monorepo-admin-five.vercel.app/';

const MENU_ITEMS: MenuItem[] = [
  {
    icon: Globe,
    tooltip: 'سایت اصلی',
    path: MAIN_SITE,
    rootPath: MAIN_SITE,
  },
  {
    icon: LayoutGrid,
    tooltip: 'ادمین',
    path: ADMIN_PANEL,
    rootPath: ADMIN_PANEL,
  },
];

// ────────────────────────────────────────────────
// Component
// ────────────────────────────────────────────────
export function SidebarPrimary() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(MENU_ITEMS[1] ?? null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentUrl = window.location.href;

    const matched = MENU_ITEMS.find(
      (item) =>
        currentUrl === item.rootPath ||
        currentUrl.startsWith(item.rootPath)
    );

    if (matched) {
      setSelectedItem(matched);
    }
  }, []); 


  return (
    <aside
      className={cn(
        'flex flex-col items-center justify-between',
        'shrink-0 py-5 gap-5',
        'w-[70px] lg:w-[--sidebar-collapsed-width]',
        'border-e border-input bg-background'
      )}
    >
      {/* Logo */}
      <Link href="/" className="px-2">
        <Image
          src="/assets/mini-logo.svg"
          alt="لوگو"
          width={50}
          height={50}
          className="max-h-8"
          
        />
      </Link>

      {/* Navigation */}
      <ScrollArea className="grow w-full flex flex-col items-center">
        <nav className="flex flex-col items-center gap-2.5 py-2">
          {MENU_ITEMS.map((item) => {
            const isActive = item === selectedItem;

            return (
              <Tooltip key={item.tooltip}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="ghost"
                    mode="icon"
                    data-state={isActive ? 'open' : undefined}
                    className={cn(
                      'size-9 border border-transparent rounded-md transition-colors',
                      'hover:text-foreground hover:border-border/40',
                      'data-[state=open]:bg-zinc-900 data-[state=open]:text-white data-[state=open]:border-zinc-800'
                    )}
                  >
                    <Link href={item.path}>
                      <item.icon className="size-4.5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={12}>
                  {item.tooltip}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer actions */}
      <div className="flex flex-col items-center gap-2.5 shrink-0">
        <ActionButton icon={Mails} />
        <ActionButton icon={NotepadText} />
        <ActionButton icon={Settings} />

        <UserDropdownMenu />
      </div>
    </aside>
  );
}

// ────────────────────────────────────────────────
// Reusable small component
// ────────────────────────────────────────────────
function ActionButton({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <Button
      variant="ghost"
      mode="icon"
      className="text-muted-foreground hover:text-foreground"
    >
      <Icon className="opacity-100 size-4.5" />
    </Button>
  );
}