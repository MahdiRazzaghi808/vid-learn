import ArticleCard from "@/components/common/article-card";
import { Pagination } from "@/components/common/pagination";
import { SearchInput } from "@/components/common/search-input";
import HeadText from "@/components/common/typography/head";

const MOCK_ARTICLES = Array.from({ length: 45 }).map((_, i) => ({
  id: i + 1,
  title: `مقاله آموزشی شماره ${i + 1}: راهنمای جامع یادگیری برنامه نویسی`,
  excerpt:
    "در این مقاله به بررسی عمیق مفاهیم پایه تا پیشرفته می‌پردازیم و نکات کلیدی برای ورود به بازار کار را بررسی می‌کنیم...",
  author: "علی محمدی",
  date: "۱۲ اردیبهشت ۱۴۰5",
  image: `/assets/cards/blog.png`,
}));

const ITEMS_PER_PAGE = 9;

export default function BlogsPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams.q || "";
  const currentPage = Number(searchParams.page) || 1;

  const filteredArticles = MOCK_ARTICLES.filter(
    (article) =>
      article.title.includes(query) || article.excerpt.includes(query)
  );

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <HeadText as="h1">مقالات</HeadText>
        <SearchInput placeholder="جستجو در مقالات..." className="sm:w-72" />
        </div>

      {paginatedArticles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paginatedArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} />
          </>
      ) : (
        <div className="text-center py-20 bg-card rounded-3xl">
          <p className="text-muted-foreground text-lg">
            مقاله‌ای با این مشخصات یافت نشد.
          </p>
        </div>
      )}
    </div>
  );
}
