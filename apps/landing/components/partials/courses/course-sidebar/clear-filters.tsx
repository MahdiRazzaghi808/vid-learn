'use client';

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@repo/main/components/ui/button";

export interface ClearFiltersButtonProps {
  className?: string;
}

export const ClearFiltersButton: React.FC<ClearFiltersButtonProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasFilters =
    (searchParams.has("price") && searchParams.get("price") !== "all") ||
    searchParams.has("categories") ||
    searchParams.has("minPrice") ||
    searchParams.has("maxPrice");

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("price");
    params.delete("categories");
    params.delete("minPrice");
    params.delete("maxPrice");
    params.set("page", "1");

    router.push(pathname + "?" + params.toString(), { scroll: false });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClearFilters}
      disabled={!hasFilters}
      className={`text-xs text-muted-foreground hover:text-destructive disabled:opacity-50 ${className ?? ''}`}
    >
      حذف همه
    </Button>
  );
};
