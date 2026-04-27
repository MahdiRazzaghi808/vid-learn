import { Sidebar } from './sidebar';
import { Header } from './header';
import { useLayout } from './context';
import { useEffect, useState } from 'react';
import { cn } from '@repo/main/utils/cn';
import { MenuItem, MenuSidebarProps } from './types';

export function Wrapper({ children, menuSidebar, HeaderTitle }: { children: React.ReactNode, menuSidebar: MenuSidebarProps, HeaderTitle: React.ReactElement }) {
  const { isMobile } = useLayout();
  const [enableTransitions, setEnableTransitions] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEnableTransitions(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="flex h-screen w-full [&_.container-fluid]:px-6">
      {!isMobile && <Sidebar menuSidebar={menuSidebar} />}

      <div className="flex flex-col flex-1 min-w-0 w-full">
        <Header menuSidebar={menuSidebar} HeaderTitle={HeaderTitle} />
        <main
          className={cn(
            'flex-1 grow-full duration-300 lg:ps-[calc(0.6rem+var(--sidebar-collapsed-width))] lg:in-data-[sidebar-open=true]:ps-[calc(var(--sidebar-width)+0.6rem)] pt-(--header-height-mobile) lg:pt-(--header-height) pb-2.5',
            enableTransitions ? 'transition-all duration-300' : 'transition-none'
          )}
          role="content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
