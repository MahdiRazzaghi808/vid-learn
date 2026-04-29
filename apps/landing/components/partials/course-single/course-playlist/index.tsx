'use client';

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@repo/main/components/ui/accordion";
import { PlayCircle, Lock, MonitorPlay } from "lucide-react";
import { cn } from "@repo/main/utils/cn";

type Episode = {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
  videoUrl?: string;
};

type Chapter = {
  id: string;
  title: string;
  episodes: Episode[];
};

export const CoursePlaylist = ({ chapters }: { chapters: Chapter[] }) => {
  const [activeVideo, setActiveVideo] = useState<Episode | null>(
    chapters[0]?.episodes[0] && !chapters[0].episodes[0].isLocked
      ? chapters[0].episodes[0]
      : null
  );

  return (
    <div className="bg-card rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm space-y-8">
      <h3 className="text-2xl font-black text-foreground">فهرست پخش</h3>

      <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center">
        {activeVideo?.videoUrl ? (
          <video
            key={activeVideo.id}
            src={activeVideo.videoUrl}
            controls
            className="w-full h-full object-cover"
            autoPlay
          />
        ) : (
          <div className="text-white flex flex-col items-center gap-4">
            <MonitorPlay className="w-16 h-16 text-muted-foreground" />
            <p className="text-muted-foreground font-medium">
              ویدیویی برای پخش انتخاب نشده است
            </p>
          </div>
        )}
      </div>

      {activeVideo && (
        <h4 className="text-lg font-bold text-primary mt-4 mb-6 px-2">
          در حال پخش: {activeVideo.title}
        </h4>
      )}

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        defaultValue={chapters[0]?.id}
      >
        {chapters.map((chapter) => (
          <AccordionItem
            key={chapter.id}
            value={chapter.id}
            className="border-none rounded-2xl bg-secondary/20 overflow-hidden"
          >
            <AccordionTrigger className="hover:no-underline py-5 font-bold text-lg transition-colors hover:bg-secondary/30">
              {chapter.title}
            </AccordionTrigger>

            <AccordionContent className="pb-4">
              <div className="space-y-2 pt-2">
                {chapter.episodes.map((episode, index) => {
                  const isActive = activeVideo?.id === episode.id;

                  return (
                    <div
                      key={episode.id}
                      onClick={() =>
                        !episode.isLocked && setActiveVideo(episode)
                      }
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl transition-all group shadow-sm",
                        episode.isLocked
                          ? "cursor-not-allowed opacity-75"
                          : "cursor-pointer hover:shadow-md hover:bg-background",
                        isActive && "bg-primary/5 border border-primary/20"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : episode.isLocked
                              ? "bg-secondary text-muted-foreground"
                              : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          )}
                        >
                          {index + 1}
                        </div>

                        <div className="flex items-center gap-2">
                          {episode.isLocked ? (
                            <Lock className="w-4 h-4 text-muted-foreground/70" />
                          ) : (
                            <PlayCircle
                              className={cn(
                                "w-4 h-4 transition-transform text-primary",
                                isActive
                                  ? "scale-110"
                                  : "group-hover:scale-110"
                              )}
                            />
                          )}

                          <span
                            className={cn(
                              "text-base",
                              episode.isLocked
                                ? "text-muted-foreground"
                                : isActive
                                ? "font-bold text-primary"
                                : "font-semibold text-foreground"
                            )}
                          >
                            {episode.title}
                          </span>
                        </div>
                      </div>

                      <span
                        className={cn(
                          "text-sm font-medium px-3 py-1.5 rounded-lg",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground bg-secondary/50"
                        )}
                      >
                        {episode.duration}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
