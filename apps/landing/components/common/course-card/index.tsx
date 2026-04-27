import { Clock, Star, User } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  price: string;
  duration: string;
  rating: number;
  image: string;
}

export default function CourseCard({ title, instructor, price, duration, rating, image }: CourseCardProps) {
  return (
    <div className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-zinc-800 flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          {rating}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-lg line-clamp-2 mb-3 text-foreground">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <User className="w-4 h-4" />
          <span>{instructor}</span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <span className="font-bold text-primary">{price}</span>
        </div>
      </div>
    </div>
  );
}
