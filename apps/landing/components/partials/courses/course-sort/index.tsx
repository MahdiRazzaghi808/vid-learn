// src/components/courses/course-sort.tsx
'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/main/components/ui/select";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const CourseSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "newest";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(pathname + "?" + params.toString(), { scroll: false });
  };

  return (
    <div className="w-full sm:w-fit flex justify-between items-center gap-3">
      <span className="text-sm text-muted-foreground whitespace-nowrap">مرتب‌سازی:</span>
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="مرتب‌سازی براساس..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">جدیدترین‌ها</SelectItem>
          <SelectItem value="price-asc">ارزان‌ترین</SelectItem>
          <SelectItem value="price-desc">گران‌ترین</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
