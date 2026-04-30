import Image from "next/image";

interface Props {
  image: string;
  content: string;
  title: string;
}

export default function ArticleContent({ image, content, title }: Props) {
  return (
    <article className="space-y-8">

      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="prose prose-neutral dark:prose-invert max-w-none
        prose-h2:text-xl
        prose-h2:mt-10
        prose-p:text-muted-foreground
        prose-p:leading-8
        prose-li:text-muted-foreground
        prose-blockquote:bg-muted
        prose-blockquote:p-4
        prose-blockquote:rounded-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
