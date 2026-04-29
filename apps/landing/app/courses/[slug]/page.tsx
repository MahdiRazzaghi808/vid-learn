import { CourseDetails } from "@/components/partials/course-single/course-details";
import { CourseDescription } from "@/components/partials/course-single/course-description";
import { CoursePlaylist } from "@/components/partials/course-single/course-playlist";
import { CourseReviews } from "@/components/partials/course-single/course-reviews";

const COURSE_MOCK_DATA = {
    title: "آموزش جامع Next.js 14 پروژه محور",
    image: "/assets/cards/1.png",
    price: 2500000,
    stats: {
      duration: "۴۵ ساعت و ۳۰ دقیقه",
      episodesCount: 120,
      instructor: "علی محمدی",
      level: "مقدماتی تا پیشرفته",
      status: "در حال برگزاری",
      prerequisite: { title: "آموزش React.js", link: "/courses/react-basics" },
    },
    description: [
      "در این دوره جامع، به بررسی عمیق و کاربردی فریم‌ورک Next.js می‌پردازیم. از مفاهیم پایه تا معماری‌های پیچیده سمت سرور را با انجام پروژه‌های واقعی یاد خواهید گرفت.",
      "مباحثی مانند Server Actions، App Router جدید، بهینه‌سازی تصاویر، سئو پیشرفته و اتصال به دیتابیس‌های مختلف به طور کامل پوشش داده شده است.",
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    ],
    chapters: [
        {
          id: "ch-1",
          title: "فصل اول: مقدمات و نصب",
          episodes: [
            { id: "ep-1", title: "معرفی دوره و پیش‌نیازها", duration: "10:25", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-2", title: "نصب Node.js و ابزارها", duration: "12:40", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-3", title: "ساخت اولین پروژه Next.js", duration: "15:30", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-4", title: "آشنایی با ساختار پروژه", duration: "14:10", isLocked: true },
          ],
        },
        {
          id: "ch-2",
          title: "فصل دوم: مسیردهی (Routing)",
          episodes: [
            { id: "ep-5", title: "مفهوم App Router", duration: "18:45", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-6", title: "ساخت صفحات و Layout", duration: "20:10", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-7", title: "Nested Routes", duration: "17:50", isLocked: true },
            { id: "ep-8", title: "Dynamic Routes", duration: "25:15", isLocked: true },
            { id: "ep-9", title: "Catch All Routes", duration: "16:30", isLocked: true },
          ],
        },
        {
          id: "ch-3",
          title: "فصل سوم: کامپوننت‌ها و UI",
          episodes: [
            { id: "ep-10", title: "Server Components", duration: "19:20", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-11", title: "Client Components", duration: "21:05", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-12", title: "استفاده از TailwindCSS", duration: "23:40", isLocked: true },
            { id: "ep-13", title: "ساخت UI قابل استفاده مجدد", duration: "18:15", isLocked: true },
          ],
        },
        {
          id: "ch-4",
          title: "فصل چهارم: دریافت داده",
          episodes: [
            { id: "ep-14", title: "Data Fetching در Next.js", duration: "22:30", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-15", title: "Server Actions", duration: "20:45", isLocked: true },
            { id: "ep-16", title: "Caching و Revalidation", duration: "24:10", isLocked: true },
            { id: "ep-17", title: "کار با API خارجی", duration: "19:50", isLocked: true },
          ],
        },
        {
          id: "ch-5",
          title: "فصل پنجم: احراز هویت",
          episodes: [
            { id: "ep-18", title: "مفهوم Authentication", duration: "15:20", isLocked: false, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "ep-19", title: "راه‌اندازی NextAuth", duration: "26:35", isLocked: true },
            { id: "ep-20", title: "محافظت از Route ها", duration: "18:40", isLocked: true },
          ],
        },
        {
          id: "ch-6",
          title: "فصل ششم: دیپلوی و بهینه‌سازی",
          episodes: [
            { id: "ep-21", title: "بهینه‌سازی Performance", duration: "21:15", isLocked: true },
            { id: "ep-22", title: "Image Optimization", duration: "17:25", isLocked: true },
            { id: "ep-23", title: "Deploy روی Vercel", duration: "14:55", isLocked: true },
            { id: "ep-24", title: "جمع‌بندی دوره", duration: "12:10", isLocked: true },
          ],
        },
      ],
      
    reviews: [
      { id: 1, user: "سارا احمدی", avatar: "/assets/avatar/avatar-1.png", date: "۲ روز پیش", rating: 5, content: "دوره بسیار عالی و کاملی بود." },
      { id: 2, user: "امیرحسین رضایی", avatar: "", date: "۱ هفته پیش", rating: 4.5, content: "مدرس تسلط خوبی روی مباحث داره." },
      { id: 3, user: "مریم کریمی", avatar: "/assets/avatar/avatar-6.png", date: "۲ هفته پیش", rating: 4, content: "کیفیت صدا تو بعضی قسمت‌ها می‌تونه بهتر باشه، ولی محتوا عالیه." },
      { id: 4, user: "علی علوی", avatar: "/assets/avatar/avatar-4.png", date: "۱ ماه پیش", rating: 5, content: "بهترین دوره Next.js که تا حالا دیدم!" },
      { id: 5, user: "زهرا حسینی", avatar: "/assets/avatar/avatar-8.png", date: "۱ ماه پیش", rating: 4.5, content: "پروژه‌های عملی خیلی به درک مطلب کمک کرد." },
    ],
  };

export default function SingleCoursePage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-24">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 lg:sticky top-24">
          <CourseDetails title={COURSE_MOCK_DATA.title} stats={COURSE_MOCK_DATA.stats} price={COURSE_MOCK_DATA.price} />
        </div>

        <div className="lg:col-span-8 space-y-8">
          <CourseDescription image={COURSE_MOCK_DATA.image} description={COURSE_MOCK_DATA.description} />
          <CoursePlaylist chapters={COURSE_MOCK_DATA.chapters} />
          <CourseReviews reviews={COURSE_MOCK_DATA.reviews} />
        </div>
      </div>
    </div>
  );
}
