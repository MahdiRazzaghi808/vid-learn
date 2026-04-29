import Hero from "@/components/partials/hero";
import StatsCounter from "@/components/partials/stats-counter";
import MainSlider from "@/components/partials/main-slider";
import LatestCourses from "@/components/partials/latest-courses";
import SuggestedCoursesSlider from "@/components/partials/suggested-courses-slider";
import LatestArticles from "@/components/partials/latest-articles";
import Testimonials from "@/components/partials/testimonials";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Hero />

      <section className="relative overflow-hidden pb-12">
        <div className="hidden lg:block absolute top-[10%] -right-[10%] w-[70vw] h-[250px] rounded-full bg-gradient-to-l from-blue-500/20 via-cyan-400/20 to-transparent blur-3xl pointer-events-none z-0 animate-slide-rl" />
        <div className="hidden lg:block absolute top-[60%] -left-[10%] w-[60vw] h-[200px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-400/20 to-transparent blur-3xl pointer-events-none z-0 animate-slide-lr" />

        <div className="container mx-auto space-y-24 py-12 relative z-10">
          <StatsCounter />
          <MainSlider />
          <LatestCourses />
        </div>
      </section>

      <LatestArticles />

      <div className="container mx-auto space-y-24 py-12 relative z-10">
        <SuggestedCoursesSlider />
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}
