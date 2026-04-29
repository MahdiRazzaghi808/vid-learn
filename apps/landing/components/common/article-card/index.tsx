"use client"
import { Calendar, User, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ArticleCardProps {
  id: number;  // اضافه کردم برای لینک
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function ArticleCard({ id, title, excerpt, date, author, image }: ArticleCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/articles/${id}`);
  };

  return (
    <article
      onClick={handleClick}
      tabIndex={0}
      role="link"
      className="relative cursor-pointer flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm
        hover:shadow-md  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div
        className="absolute top-4 right-4 z-10 bg-blue-100 rounded-full p-1
          flex items-center justify-center
          opacity-70 hover:opacity-100
          transition-all duration-300 transform hover:scale-125 hover:rotate-12"
      >
        <Star className="w-5 h-5 text-primary" />
      </div>

      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-xl mb-2 text-foreground line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
