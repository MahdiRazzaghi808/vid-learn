'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'علی رضایی', role: 'توسعه‌دهنده فرانت‌اند', text: 'دوره‌های ویدلرن بی‌نظیر هستند. من تونستم با این دوره‌ها تو یه شرکت خوب استخدام بشم.' },
  { id: 2, name: 'سارا محمدی', role: 'طراح محصول', text: 'کیفیت ویدیوها و تسلط مدرسین بسیار بالاست. قطعا به بقیه هم پیشنهاد میکنم.' },
  { id: 3, name: 'محمد کریمی', role: 'دانشجوی نرم‌افزار', text: 'پشتیبانی دوره‌ها عالیه و هر سوالی داشتم در سریع‌ترین زمان ممکن پاسخ داده شد.' },
];

export default function Testimonials() {
  return (
    <section className="space-y-12 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">نظرات دانشجویان</h2>
        <p className="text-muted-foreground">ببینید دیگران درباره ویدلرن چه می‌گویند</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl border border-border relative shadow-sm"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 rotate-180" />
            <p className="text-foreground leading-relaxed mb-6 relative z-10">
              «{item.text}»
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${item.id}`} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
