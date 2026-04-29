'use client';

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Label } from "@repo/main/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@repo/main/components/ui/radio-group";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/main/components/ui/accordion";
import { Checkbox } from "@repo/main/components/ui/checkbox";
import { Input } from "@repo/main/components/ui/input";
import { useCallback, useState } from "react";
import { Button } from "@repo/main/components/ui/button";
import { ClearFiltersButton } from "./clear-filters";

const CATEGORIES = [
    {
        id: "frontend",
        title: "فرانت‌اند",
        subItems: [
            { id: "html-css", title: "HTML & CSS" },
            { id: "react", title: "React" },
            { id: "nextjs", title: "Next.js" },
        ],
    },
    {
        id: "backend",
        title: "بک‌اند",
        subItems: [
            { id: "nodejs", title: "Node.js" },
            { id: "python", title: "Python" },
            { id: "php", title: "PHP" },
        ],
    },
    {
        id: "ai",
        title: "هوش مصنوعی",
        subItems: [
            { id: "ml", title: "Machine Learning" },
            { id: "dl", title: "Deep Learning" },
        ],
    },
];

export const CourseSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPrice = searchParams.get("price") || "all";
    const currentCategories = searchParams.get("categories")?.split(",") || [];

    const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
    const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

    const createQueryString = useCallback(
        (updates: Record<string, string | null>) => {
            const params = new URLSearchParams(searchParams.toString());

            Object.entries(updates).forEach(([name, value]) => {
                if (value === null || value === "all" || value === "") {
                    params.delete(name);
                } else {
                    params.set(name, value);
                }
            });

            params.set("page", "1");
            return params.toString();
        },
        [searchParams]
    );

    const handlePriceTypeChange = (value: string) => {
        const updates: Record<string, string | null> = { price: value };
        if (value === "free") {
            updates.minPrice = null;
            updates.maxPrice = null;
            setMinPrice("");
            setMaxPrice("");
        }
        router.push(pathname + "?" + createQueryString(updates), { scroll: false });
    };

    const handleApplyPriceRange = () => {
        router.push(
            pathname + "?" + createQueryString({ minPrice, maxPrice }),
            { scroll: false }
        );
    };

    const handleCategoryChange = (subItemId: string, checked: boolean) => {
        const newCategories = checked
            ? [...currentCategories, subItemId]
            : currentCategories.filter((id) => id !== subItemId);

        router.push(
            pathname + "?" + createQueryString({
                categories: newCategories.length ? newCategories.join(",") : null
            }),
            { scroll: false }
        );
    };

    return (
        <div className="bg-accent rounded-xl py-0 lg:p-6 space-y-8">
            <div>
                <div className="hidden lg:flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">فیلترها</h3>
                    <ClearFiltersButton />
                </div>
                <div className="space-y-4">
                    <h4 className="font-medium text-sm text-muted-foreground">وضعیت قیمت</h4>
                    <RadioGroup value={currentPrice} onValueChange={handlePriceTypeChange}>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="all" id="price-all" />
                            <Label htmlFor="price-all">همه دوره‌ها</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="paid" id="price-paid" />
                            <Label htmlFor="price-paid">نقدی</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="free" id="price-free" />
                            <Label htmlFor="price-free">رایگان</Label>
                        </div>
                    </RadioGroup>
                </div>

                {currentPrice !== "free" && (
                    <div className="mt-6 space-y-3 p-4 bg-background/60 rounded-lg">
                        <h4 className="text-sm font-medium">محدوده قیمت (تومان)</h4>
                        <div className="flex items-center gap-2">
                            <Input
                                type="text"
                                placeholder="از"
                                value={minPrice ? Number(minPrice).toLocaleString() : ""}
                                onChange={(e) => setMinPrice(e.target.value.replace(/\D/g, ""))}
                                className="h-8 text-xs"
                            />
                            <span className="text-muted-foreground">-</span>
                            <Input
                                type="text"
                                placeholder="تا"
                                value={maxPrice ? Number(maxPrice).toLocaleString() : ""}
                                onChange={(e) => setMaxPrice(e.target.value.replace(/\D/g, ""))}
                                className="h-8 text-xs"
                            />
                        </div>
                        <Button
                            size="sm"
                            className="w-full h-8 text-xs"
                            onClick={handleApplyPriceRange}
                        >
                            اعمال قیمت
                        </Button>
                    </div>
                )}
            </div>

            <div className="border-t border-accent-foreground/20 pt-6">
                <h4 className="font-medium text-sm text-muted-foreground mb-4">دسته‌بندی‌ها</h4>
                <Accordion type="multiple" className="w-full">
                    {CATEGORIES.map((category) => (
                        <AccordionItem key={category.id} value={category.id} className="border-b-0">
                            <AccordionTrigger className="hover:no-underline py-3 text-sm font-medium">
                                {category.title}
                            </AccordionTrigger>
                            <AccordionContent className="pt-1 pb-3">
                                <div className="space-y-3 ps-2">
                                    {category.subItems.map((subItem) => (
                                        <div key={subItem.id} className="flex items-center gap-2">
                                            <Checkbox
                                                id={`category-${subItem.id}`}
                                                checked={currentCategories.includes(subItem.id)}
                                                onCheckedChange={(checked) =>
                                                    handleCategoryChange(subItem.id, checked as boolean)
                                                }
                                            />
                                            <Label
                                                htmlFor={`category-${subItem.id}`}
                                                className="text-sm font-normal cursor-pointer"
                                            >
                                                {subItem.title}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};
