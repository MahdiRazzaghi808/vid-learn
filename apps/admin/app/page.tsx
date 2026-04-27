'use client';

import { useLayout } from '@repo/main/components/layout-20/components/context';
import { HeaderTitle } from './components/layout/header-title';
import { Skeleton } from '@repo/main/components/ui/skeleton';

export default function Home() {
  const { isMobile } = useLayout();


  return (
    <div className="container-fluid">
      {isMobile && <HeaderTitle items={
        [{ title: "خانه", href: "/" }]
      } />}
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}
