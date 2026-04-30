import HeadText from "@/components/common/typography/head";
import { Calendar, Clock, User } from "lucide-react";

interface Props {
    title: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    readTime: string;
}

export default function ArticleHeader({ title, author, date, readTime }: Props) {
    return (
        <header className="mb-10 space-y-6">

            <HeadText as="h1">
                {title}
            </HeadText>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">

                <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />

                    <span className="font-medium text-foreground">
                        {author.name}
                    </span>
                </div>

                <span className="opacity-40">•</span>

                <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {date}
                </div>

                <span className="opacity-40">•</span>

                <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {readTime}
                </div>

            </div>
        </header>
    );
}
