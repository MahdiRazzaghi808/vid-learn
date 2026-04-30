"use client"

import { Calendar, User, Star } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  date,
  author,
  image,
}: ArticleCardProps) {
  return (
    <Link
      href={`/blog/${id}`}
      className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* Featured badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-zinc-800 flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="font-bold text-lg min-h-[56px] mb-3 text-foreground group-hover:text-primary transition-colors">
          {title.length > 60 ? `${title.slice(0, 57)}...` : title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex-1" />

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
