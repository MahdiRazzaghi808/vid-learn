'use client';

import HeadText from '@/components/common/typography/head';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@repo/main/components/ui/accordion';

const faqs = [
    {
        question: 'ویدلرن چیست؟',
        answer: 'ویدلرن پلتفرم آموزشی است که در آن می‌توانید دوره‌های ویدئویی مختلف را مشاهده و یاد بگیرید.',
    },
    {
        question: 'چگونه ثبت نام کنم؟',
        answer: 'برای ثبت نام کافیست به صفحه ثبت نام مراجعه کنید، اطلاعات خود را وارد کنید و ثبت نام را تکمیل نمایید.',
    },
    {
        question: 'آیا دوره‌ها رایگان هستند؟',
        answer: 'برخی دوره‌ها رایگان و برخی دیگر به صورت پولی ارائه می‌شوند.',
    },
    {
        question: 'آیا بعد از خرید دوره، می‌توانم به محتوای آن دسترسی مادام‌العمر داشته باشم؟',
        answer: 'بله، پس از خرید دوره، دسترسی به محتوای دوره برای همیشه محفوظ خواهد بود.',
    },
    {
        question: 'آیا امکان دریافت گواهینامه پایان دوره وجود دارد؟',
        answer: 'بله، پس از اتمام موفقیت‌آمیز دوره، می‌توانید گواهینامه رسمی دریافت کنید.',
    },
    {
        question: 'روش‌های پرداخت پشتیبانی شده کدامند؟',
        answer: 'درگاه‌های بانکی داخلی، کارت‌های اعتباری و پرداخت‌های آنلاین دیگر پشتیبانی می‌شوند.',
    },
    {
        question: 'آیا می‌توانم دوره‌ها را به صورت آفلاین مشاهده کنم؟',
        answer: 'این امکان بسته به دوره وجود دارد، برخی دوره‌ها قابلیت دانلود و مشاهده آفلاین دارند.',
    },
    {
        question: 'در صورت نارضایتی از دوره، امکان بازگشت وجه هست؟',
        answer: 'در صورت درخواست بازگشت وجه طبق قوانین سایت و در بازه زمانی مشخص، این امکان فراهم است.',
    },
];

export default function FAQ() {
    return (
        <main className=" py-24 relative w-full overflow-hidden">
            <div className="hidden lg:block absolute top-[10%] -right-[10%] w-[70vw] h-[250px] rounded-full bg-gradient-to-l from-blue-500/20 via-cyan-400/20 to-transparent blur-3xl pointer-events-none z-0 animate-slide-rl" />
            <div className="hidden lg:block absolute top-[60%] -left-[10%] w-[60vw] h-[200px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-400/20 to-transparent blur-3xl pointer-events-none z-0 animate-slide-lr" />

            <div className="max-w-4xl mx-auto">


                <HeadText as="h1">سؤالات متداول</HeadText>

                <Accordion type="multiple" className="w-full my-12 flex flex-col gap-2">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="mb-2 rounded-md bg-accent shadow-sm"
                        >
                            <AccordionTrigger className="hover:no-underline p-4 text-sm font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="p-4 text-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </main>
    );
}
