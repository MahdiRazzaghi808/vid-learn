"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="bg-card border border-border rounded-xl p-12 text-center shadow-2xl max-w-md w-full">
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-destructive"
        >
          404
        </motion.h1>

        <p className="mt-4 text-muted-foreground">
          این مسیر در پنل مدیریت وجود ندارد.
        </p>

        <Link
          href="/admin"
          className="mt-6 inline-block px-5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          بازگشت به داشبورد
        </Link>
      </div>
    </div>
  );
}
