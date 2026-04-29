'use client';

import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Users, Clock } from 'lucide-react';

const stats = [
  { id: 1, label: 'دوره آموزشی', value: 45, icon: BookOpen },
  { id: 2, label: 'دانشجو', value: 22000, icon: Users },
  { id: 3, label: 'ساعت آموزش', value: 1200, icon: Clock },
];

function Counter({ to, duration = 4 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });

    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function StatsCounter() {
  return (
    <section className="hidden sm:grid grid-cols-3 gap-10  py-10 ">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.12 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative mb-5 lg:mb-6">
            <div className="absolute inset-0 w-14 h-14 lg:w-20 lg:h-20 bg-primary/10 blur-2xl rounded-full" />
            <div className="relative p-4 lg:p-5 rounded-full bg-primary/15 text-primary backdrop-blur-sm">
              <stat.icon className="w-7 h-7 lg:w-9 lg:h-9" />
            </div>
          </div>

          <h3 className="text-3xl font-extrabold text-foreground mb-1 tracking-tight">
            +<Counter to={stat.value} duration={3} />
          </h3>

          <p className="text-muted-foreground text-base lg:text-lg">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
