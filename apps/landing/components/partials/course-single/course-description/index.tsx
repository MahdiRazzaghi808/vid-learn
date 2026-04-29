'use client';

import { useState } from "react";
import Image from "next/image";
import { Button } from "@repo/main/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type CourseDescriptionProps = {
  image: string;
  description: string[];
};

export const CourseDescription = ({ image, description }: CourseDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-3xl p-6 md:p-8 space-y-8 shadow-sm">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
        <Image
          src={image}
          alt="Course Banner"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h2 className="text-2xl font-black mb-6 text-foreground">درباره این دوره</h2>
        <div className="relative">
          <div 
            className={`prose prose-sm sm:prose-base dark:prose-invert max-w-none transition-all duration-700 ease-in-out overflow-hidden text-muted-foreground leading-loose ${
              isExpanded ? "max-h-[5000px]" : "max-h-[180px]"
            }`}
          >
            {description.map((paragraph, index) => (
              <p key={index} className="mb-4 text-justify">{paragraph}</p>
            ))}
          </div>
          
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          )}
        </div>

        <div className="mt-2 flex justify-center">
          <Button 
            variant="secondary" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="gap-2 rounded-xl px-6"
          >
            {isExpanded ? (
              <>
                مشاهده کمتر <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                مشاهده بیشتر <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
