'use client';

import { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CourseCard from '@/components/common/course-card';

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

export default function SuggestedCoursesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemWidth = 320;

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const amount = dir === 'right' ? -itemWidth : itemWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-primary/5 rounded-3xl p-6 md:p-10 space-y-8" dir="rtl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">دوره‌های پیشنهادی برای شما</h2>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="cursor-pointer w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="cursor-pointer w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          direction: 'rtl',
        }}
      >
        {[...DUMMY_COURSES, ...DUMMY_COURSES].map((course, i) => (
          <div key={i} className="min-w-[280px] md:min-w-[320px] snap-center">
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </section>
  );
}
