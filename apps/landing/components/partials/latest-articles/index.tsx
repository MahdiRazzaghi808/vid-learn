"use client"
import React from 'react'
import ArticleCard from '@/components/common/article-card'
import { motion, Variants } from 'framer-motion' // وارد کردن Variants
import { Button } from '@repo/main/components/ui/button'
import SectionHeader from '@/components/common/section-header'

const DUMMY_ARTICLES = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  title: 'چگونه مسیر برنامه‌نویسی را شروع کنیم؟',
  excerpt: 'در این مقاله به بررسی کامل مسیرهای مختلف می‌پردازیم...',
  date: '۲ روز پیش',
  author: 'تیم محتوا',
  image: `/assets/cards/1.png`,
}))

// تعریف صحیح Variants برای رفع خطا
const blobVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
  visible: {
    opacity: 0.5, // کاهش اوپاسیتی برای حالت شیشه‌ای
    scale: 1,
    filter: 'blur(40px)',
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function LatestArticles() {
  return (
    <section className="relative my-6 bg-muted py-24 overflow-hidden">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blobVariants}
        className="hidden lg:block absolute -left-20 top-1/4 w-72 h-72 rounded-full bg-blue-400/30 mix-blend-multiply"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={blobVariants}
        className="hidden lg:block absolute -right-20 bottom-1/4 w-96 h-96 rounded-full bg-purple-400/30 mix-blend-multiply"
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
