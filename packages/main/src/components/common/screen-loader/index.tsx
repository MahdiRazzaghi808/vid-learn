'use client';

import Image from 'next/image';

export function ScreenLoader() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center gap-2 justify-center fixed inset-0 z-[99] transition-opacity duration-700 ease-in-out">
      <Image
        className="h-[30px] max-w-none"
        src={'/assets/full-logo.svg'}
        width={200}
        height={200}
        alt="logo"
      />
      <p className="text-muted-foreground font-medium text-xs">
        در حال بارگذاری...
      </p>
    </div>
  );
}
