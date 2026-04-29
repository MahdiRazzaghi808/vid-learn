// src/app/courses/page.tsx
import { CourseSidebar } from "@/components/partials/courses/course-sidebar/base";
import { CourseSort } from "@/components/partials/courses/course-sort";
import { CoursePagination } from "@/components/partials/courses/course-pagination";
import { CourseSearch } from "@/components/partials/courses/course-search";
import CourseCard from "@/components/common/course-card";
import MobileFilter from "@/components/partials/courses/course-sidebar/mobile";

const CATEGORY_MOCKS = ["html-css", "react", "nextjs", "nodejs", "python", "php", "ml", "dl"];

const MOCK_COURSES = Array.from({ length: 50 }).map((_, i) => {
    const price = i % 4 === 0 ? 0 : (i % 3 === 0 ? 1500000 : 850000);
    const discount = price > 0 && i % 5 === 0 ? 20 : 0;
    const oldPrice = discount > 0 ? Math.round(price / (1 - discount / 100)) : null;

    return {
        id: i + 1,
        title: `دوره آموزشی جامع ${i + 1}`,
        instructor: "مدرس تستی",
        price: price,
        oldPrice: oldPrice,
        discount: discount,
        duration: "۲۰ ساعت",
        rating: 4.5 + (i % 5) * 0.1,
        image: `/assets/cards/1.png`,
        category: CATEGORY_MOCKS[i % CATEGORY_MOCKS.length], // اضافه شدن دسته‌بندی برای تست فیلتر
    };
});

const ITEMS_PER_PAGE = 9;

export default function CoursesPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const query = typeof searchParams.q === "string" ? searchParams.q : "";
    const sort = typeof searchParams.sort === "string" ? searchParams.sort : "newest";
    const priceFilter = typeof searchParams.price === "string" ? searchParams.price : "all";
    const page = typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;

    const minPrice = typeof searchParams.minPrice === "string" ? parseInt(searchParams.minPrice) : null;
    const maxPrice = typeof searchParams.maxPrice === "string" ? parseInt(searchParams.maxPrice) : null;
    const categories = typeof searchParams.categories === "string" ? searchParams.categories.split(",") : [];

    // Filter
    let filteredCourses = MOCK_COURSES.filter((course) => {
        const matchQuery = course.title.includes(query);

        const matchPriceType =
            priceFilter === "all" ||
            (priceFilter === "free" && course.price === 0) ||
            (priceFilter === "paid" && course.price > 0);

        let matchPriceRange = true;
        if (priceFilter !== "free" && course.price > 0) {
            if (minPrice !== null && course.price < minPrice) matchPriceRange = false;
            if (maxPrice !== null && course.price > maxPrice) matchPriceRange = false;
        }

        const matchCategory = categories.length === 0 || categories.includes(course?.category || "");

        return matchQuery && matchPriceType && matchPriceRange && matchCategory;
    });

    // Sort
    if (sort === "price-asc") filteredCourses.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filteredCourses.sort((a, b) => b.price - a.price);
    if (sort === "newest") filteredCourses.sort((a, b) => b.id - a.id);

    // Pagination
    const totalItems = filteredCourses.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const paginatedCourses = filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="container mx-auto px-4 py-8 lg:py-12 mt-20" dir="rtl">
            <div className="flex flex-col lg:flex-row gap-8">
                <aside className="hidden  w-full lg:w-4/12 xl:w-3/12  lg:inline">
                    <CourseSidebar />
                </aside>

                <main className="w-full lg:w-8/12 xl:w-9/12 flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-accent p-4 rounded-xl">
                        <CourseSearch />
                        <CourseSort />
                    </div>

                    <div className="lg:hidden">
                        <MobileFilter />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {paginatedCourses.length > 0 ? (
                            paginatedCourses.map((course) => (
                                <CourseCard key={course.id} {...course} />
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-muted-foreground bg-accent/50 rounded-xl">
                                دوره‌ای با این مشخصات یافت نشد.
                            </div>
                        )}
                    </div>

                    {totalPages > 1 && (
                        <CoursePagination currentPage={page} totalPages={totalPages} />
                    )}
                </main>
            </div>
        </div>
    );
}
