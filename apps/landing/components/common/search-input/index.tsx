'use client';

import { Input } from "@repo/main/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
    placeholder?: string;
    className?: string;
}

export const SearchInput = ({ placeholder = "جستجو...", className }: SearchInputProps) => {
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
        <div className={`relative w-full ${className}`}>
             <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-9 bg-accent"
            />
        </div>
    );
};
