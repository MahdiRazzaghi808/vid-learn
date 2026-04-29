'use client';

import { Input } from "@repo/main/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export const CourseSearch = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (query) {
                params.set("q", query);
            } else {
                params.delete("q");
            }
            params.set("page", "1"); 
            
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query, pathname, router]);

    return (
        <div className="w-full sm:w-72">
            <Input
                placeholder="جستجوی دوره..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-background"
            />
        </div>
    );
};
