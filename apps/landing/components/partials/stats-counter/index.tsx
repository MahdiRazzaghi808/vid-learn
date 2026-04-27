'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Clock } from 'lucide-react';

const stats = [
  { id: 1, label: 'دوره آموزشی', value: 1250, icon: BookOpen },
  { id: 2, label: 'دانشجو', value: 45000, icon: Users },
  { id: 3, label: 'ساعت آموزش', value: 8500, icon: Clock },
];

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const incrementTime = (duration / end) * 1000;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-sm border border-border"
        >
          <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary">
            <stat.icon className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-2">
            +<Counter to={stat.value} />
          </h3>
          <p className="text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
