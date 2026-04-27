"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 relative overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full bottom-[-100px] left-[-100px]" />

      <div className="text-center relative z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-muted-foreground text-lg"
        >
          صفحه‌ای که دنبالش می‌گردی هنوز ساخته نشده یا حذف شده.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            صفحه اصلی
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-lg border border-border hover:bg-secondary transition"
          >
            مشاهده دوره‌ها
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
