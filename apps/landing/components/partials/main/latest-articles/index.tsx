"use client"
import React from 'react'
import ArticleCard from '@/components/common/article-card'
import { motion, Variants } from 'framer-motion'
import SectionHeader from '@/components/common/section-header'
import { useTheme } from 'next-themes'
import { cn } from '@repo/main/utils/cn'

const DUMMY_ARTICLES = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  title: 'چگونه مسیر برنامه‌نویسی را شروع کنیم؟',
  excerpt: 'در این مقاله به بررسی کامل مسیرهای مختلف می‌پردازیم...',
  date: '۲ روز پیش',
  author: 'تیم محتوا',
  image: `/assets/cards/blog.png`,
}))

const blobVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
  visible: {
    opacity: 0.5,
    scale: 1,
    filter: 'blur(40px)',
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function LatestArticles() {
  const { theme } = useTheme()
  return (
    <section className="relative my-6 bg-muted py-24 overflow-hidden">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blobVariants}
        className={cn("hidden lg:block absolute -left-20 top-1/4 w-72 h-72 rounded-full mix-blend-multiply",
          theme === "dark" ? " bg-blue-500" : " bg-blue-500/40"
        )}

      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blobVariants}
        className={cn("hidden lg:block absolute -right-20 bottom-1/4 w-96 h-96 rounded-full  mix-blend-multiply",
          theme === "dark" ? " bg-purple-400" : " bg-purple-400/40"
        )}
      />

      <div className="container mx-auto space-y-8 relative z-10">
        <SectionHeader
          title="جدیدترین مقالات"
          buttonText="مشاهده همه"
          href="/articles"
        />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_ARTICLES.map((a) => (
            <ArticleCard key={a.id} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
