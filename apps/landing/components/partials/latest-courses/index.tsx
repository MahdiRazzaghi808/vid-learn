import CourseCard from '@/components/common/course-card';
import SectionHeader from '@/components/common/section-header';
import HeadText from '@/components/common/typography/head';
import { Button } from '@repo/main/components/ui/button';
import { BookOpen } from 'lucide-react';

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
      <SectionHeader
        title="جدیدترین دوره‌ها"
        buttonText="مشاهده همه"
        href="/courses"
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {DUMMY_COURSES.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
