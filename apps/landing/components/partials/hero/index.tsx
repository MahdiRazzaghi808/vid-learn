'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@repo/main/components/ui/button';
import HeadText from '../../common/typography/head';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(/assets/hero.jpg)` }} 
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-3xl"
      >
        <HeadText as="h1" className="text-white !text-4xl md:!text-5xl font-bold mb-6">
          ویدلرن، مسیر یادگیری بی‌نهایت
        </HeadText>
        <p className="text-zinc-200 text-lg mb-8">
          مهارت‌های جدید را با بهترین دوره‌های ویدیویی کشف کنید
        </p>

        <div className="flex w-full max-w-lg items-center bg-white rounded-full p-2 shadow-lg">
          <input 
            type="text" 
            placeholder="چی میخوای یاد بگیری؟..." 
            className="flex-1 bg-transparent border-none outline-none px-4 text-zinc-900"
          />
          <Button variant="primary" shape="circle" size="icon">
            <Search className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex gap-4 mt-8 text-sm text-zinc-300">
          <span>توسعه وب</span>
          <span>طراحی UI/UX</span>
          <span>هوش مصنوعی</span>
        </div>
      </motion.div>
    </section>
  );
}
