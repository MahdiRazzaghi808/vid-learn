import { Clock, PlayCircle, User, Signal, Activity, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@repo/main/components/ui/button";

type CourseDetailsProps = {
  title: string;
  price: number;
  stats: {
    duration: string;
    episodesCount: number;
    instructor: string;
    level: string;
    status: string;
    prerequisite: { title: string; link: string };
  };
};

export const CourseDetails = ({ title, price, stats }: CourseDetailsProps) => {
  return (
    <div className="bg-secondary/20 rounded-3xl p-8 space-y-8 shadow-sm">
      <h1 className="text-2xl font-black leading-snug text-foreground">
        {title}
      </h1>
      
      <div className="space-y-5">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary/70" />
            <span className="font-medium">زمان آموزش</span>
          </div>
          <span className="font-semibold text-foreground/90">{stats.duration}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <PlayCircle className="w-5 h-5 text-primary/70" />
            <span className="font-medium">تعداد قسمت‌ها</span>
          </div>
          <span className="font-semibold text-foreground/90">{stats.episodesCount} قسمت</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <User className="w-5 h-5 text-primary/70" />
            <span className="font-medium">مدرس</span>
          </div>
          <span className="font-semibold text-foreground/90">{stats.instructor}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Signal className="w-5 h-5 text-primary/70" />
            <span className="font-medium">سطح دوره</span>
          </div>
          <span className="font-semibold text-foreground/90">{stats.level}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Activity className="w-5 h-5 text-primary/70" />
            <span className="font-medium">وضعیت دوره</span>
          </div>
          <span className="font-semibold text-emerald-500">{stats.status}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <LinkIcon className="w-5 h-5 text-primary/70" />
            <span className="font-medium">پیشنیاز</span>
          </div>
          <Link href={stats.prerequisite.link} className="font-semibold text-primary hover:underline transition-all">
            {stats.prerequisite.title}
          </Link>
        </div>
      </div>

      <div className="pt-6 border-t border-border/50 space-y-5">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-primary">
            {price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">تومان</span>
          </span>
        </div>
        <Button size="lg" className="w-full shadow-primary/25 hover:scale-[1.02] transition-transform">
          ثبت‌نام در دوره
        </Button>
      </div>
    </div>
  );
};
