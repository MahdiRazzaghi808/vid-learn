'use client';

import { useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CourseCard from '@/components/common/course-card';

const DUMMY_SUGGESTED = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `دوره پیشنهادی ${i + 1}`,
  instructor: 'مدرس برتر',
  price: '۹۰۰,۰۰۰ تومان',
  duration: '۲۰ ساعت',
  rating: 4.9,
  image: `/images/course-placeholder-${(i % 3) + 1}.jpg`,
}));

export default function SuggestedCoursesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'right' ? 320 : -320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary/5 rounded-3xl p-6 md:p-10 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">دوره‌های پیشنهادی برای شما</h2>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {DUMMY_SUGGESTED.map((course) => (
          <div key={course.id} className="min-w-[280px] md:min-w-[320px] snap-center">
            <CourseCard {...course} />
          </div>
        ))}
      </div>
    </section>
  );
}
