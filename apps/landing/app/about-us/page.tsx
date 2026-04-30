'use client';

import { useState, useEffect } from 'react';
import HeadText from '@/components/common/typography/head';
import { Lightbulb } from 'lucide-react';

export default function AboutUs() {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn(prev => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen py-24 overflow-hidden bg-background flex flex-col items-center justify-center px-6 sm:px-12 text-center">
      {/* Gradient Glow Decorations */}
      <div className="hidden lg:block absolute top-[10%] -right-[10%] w-[70vw] h-[250px] rounded-full bg-gradient-to-l from-blue-500/25 via-cyan-400/25 to-transparent blur-3xl pointer-events-none z-0 animate-slide-rl" />
      <div className="hidden lg:block absolute top-[60%] -left-[10%] w-[60vw] h-[200px] rounded-full bg-gradient-to-r from-emerald-500/25 via-teal-400/25 to-transparent blur-3xl pointer-events-none z-0 animate-slide-lr" />

      {/* Lightbulb with blinking effect */}
      <Lightbulb
        className={`mb-10 w-20 h-20 text-amber-400 transition-opacity duration-500 ${
          isOn ? 'opacity-100' : 'opacity-30'
        }`}
        aria-hidden="true"
      />

      <HeadText as="h1">
        درباره ویدلرن
      </HeadText>

      <p className="my-10 text-lg max-w-3xl mx-auto text-foreground/40 leading-relaxed">
        ویدلرن، پلتفرمی فراتر از آموزش آنلاین است.  
        در اینجا، یادگیری با تکنولوژی نوین، تجربه کاربری شگفت‌انگیز و محتوای تخصصی به یک سفر تبدیل می‌شود.  
        به جمع هزاران یادگیرنده‌ای بپیوندید که روزانه مهارت‌های خود را ارتقا می‌دهند و دنیای خود را گسترش می‌دهند.
      </p>
      <a
        href="tel:+9821xxxxxxx"
        className="text-primary font-semibold"
      >
        تماس با ما
      </a>
    </main>
  );
}
