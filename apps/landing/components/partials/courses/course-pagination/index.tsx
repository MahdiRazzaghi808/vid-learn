// src/components/courses/course-pagination.tsx
'use client';

import { Button } from "@repo/main/components/ui/button";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
}

export const CoursePagination = ({ currentPage, totalPages }: CoursePaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronRight className="size-4" />
      </Button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <Button
            key={page}
            variant={isActive ? "primary" : "outline"}
            size="icon"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronLeft className="size-4" />
      </Button>
    </div>
  );
};
