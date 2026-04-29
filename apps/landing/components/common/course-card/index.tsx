import Link from 'next/link';
import { Clock, Star, User, Tag } from 'lucide-react';

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  price: number; // تغییر به عدد
  oldPrice?: number | null; // تغییر به عدد
  discount?: number;
  duration: string;
  rating: number;
  image: string;
}

export default function CourseCard({
  id,
  title,
  instructor,
  price,
  oldPrice = null,
  discount = 0,
  duration,
  rating,
  image,
}: CourseCardProps) {
  
  const formatPrice = (value: number) => {
    if (value === 0) return "رایگان";
    return new Intl.NumberFormat('fa-IR').format(value) + " تومان";
  };

  return (
    <Link
      href={`/courses/${id}`}
      className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-zinc-800 flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          {rating.toLocaleString('fa-IR')}
        </div>

        {discount > 0 && (
          <div className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-md flex items-center gap-1 bg-red-600 text-white">
            <Tag className="w-3 h-3" />
            {discount.toLocaleString('fa-IR')}% تخفیف
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-lg min-h-[56px] mb-3 text-foreground group-hover:text-primary transition-colors">
          {title.length > 40 ? `${title.slice(0, 37)}...` : title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <User className="w-4 h-4" />
          <span>{instructor}</span>
        </div>

        <div className="flex-1" />

        <div className="flex items-center justify-between border-t border-accent-foreground/20 pt-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>

          <div className="text-left">
            {oldPrice && oldPrice > 0 ? (
              <span className="text-xs line-through text-muted-foreground block">
                {formatPrice(oldPrice)}
              </span>
            ) : (
              <span className="text-xs block invisible">placeholder</span>
            )}
            <span className="font-bold text-primary">{formatPrice(price)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
