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
      <div className="container mx-auto  space-y-24 py-12">
        <StatsCounter />
        <MainSlider />
        <LatestCourses />
        <SuggestedCoursesSlider />
        <LatestArticles />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
