import CourseCard from '@/components/common/course-card';
import { Button } from '@repo/main/components/ui/button';

const DUMMY_COURSES = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `دوره جامع آموزش ${['ری‌اکت', 'نکست‌جی‌اس', 'طراحی UI', 'پایتون'][i % 4]} از صفر تا صد`,
  instructor: 'استاد نمونه',
  price: i % 2 === 0 ? 'رایگان' : '۱,۲۰۰,۰۰۰ تومان',
  oldPrice: i % 2 === 0 ? null : '۲,۴۰۰,۰۰۰ تومان',
  discount: i % 2 === 0 ? 0 : 50,
  duration: '۴۵ ساعت',
  rating: 4.8,
  image: `/assets/cards/1.png`,
}));

export default function LatestCourses() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">جدیدترین دوره‌ها</h2>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">مشاهده همه دوره‌ها</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DUMMY_COURSES.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
