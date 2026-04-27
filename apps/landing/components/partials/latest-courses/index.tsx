import CourseCard from '@/components/common/course-card';
import { Button } from '@repo/main/components/ui/button';

const DUMMY_COURSES = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `دوره جامع آموزش ${['ری‌اکت', 'نکست‌جی‌اس', 'طراحی UI', 'پایتون'][i % 4]} از صفر تا صد`,
  instructor: 'استاد نمونه',
  price: i % 3 === 0 ? 'رایگان' : '۱,۲۰۰,۰۰۰ تومان',
  duration: '۴۵ ساعت',
  rating: 4.8,
  image: `/images/course-placeholder-${(i % 3) + 1}.jpg`,
}));

export default function LatestCourses() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">جدیدترین دوره‌ها</h2>
          <p className="text-muted-foreground">آخرین دوره‌های منتشر شده در ویدلرن</p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">مشاهده همه دوره‌ها</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DUMMY_COURSES.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
