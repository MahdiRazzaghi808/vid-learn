import ArticleCard from '@/components/common/article-card';
import { Button } from '@repo/main/components/ui/button';

const DUMMY_ARTICLES = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  title: 'چگونه مسیر برنامه‌نویسی را شروع کنیم؟ راهنمای جامع ۱۴۰۲',
  excerpt: 'در این مقاله به بررسی کامل مسیرهای مختلف برنامه‌نویسی و پیش‌نیازهای هر کدام می‌پردازیم...',
  date: '۲ روز پیش',
  author: 'تیم محتوا',
  image: `/images/article-placeholder-${i + 1}.jpg`,
}));

export default function LatestArticles() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">جدیدترین مقالات</h2>
          <p className="text-muted-foreground">با خواندن مقالات ما همیشه به‌روز باشید</p>
        </div>
        <Button variant="outline">رفتن به وبلاگ</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_ARTICLES.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
}
