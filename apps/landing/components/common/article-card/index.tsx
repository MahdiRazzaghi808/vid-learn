import { Calendar, User } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function ArticleCard({ title, excerpt, date, author, image }: ArticleCardProps) {
  return (
    <article className="flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
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
