'use client';

import Image from 'next/image';

export type NumberInfoResultDto = {
  title?: string;
  photoPath?: string;
}

type Props = {
  user: NumberInfoResultDto;
  size?: number;
};

export function UserAvatar({ user, size = 40 }: Props) {
  const avatarLetter = (user?.title?.charAt(0) || '?').toUpperCase();

  if (user?.photoPath) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full overflow-hidden border border-border ring-2 ring-background shadow-sm bg-muted"
      >
        <Image
          src={user.photoPath}
          alt={user.title || 'avatar'}
          width={size}
          height={size}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full flex items-center justify-center border border-border bg-muted text-sm font-semibold text-foreground ring-2 ring-background"
    >
      {avatarLetter}
    </div>
  );
}
