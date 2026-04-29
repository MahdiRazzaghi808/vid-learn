'use client';

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/main/components/ui/avatar";
import { Button } from "@repo/main/components/ui/button";
import { Textarea } from "@repo/main/components/ui/textarea";
import { StarRating } from "@/components/common/star-rating";

type Review = {
    id: number;
    user: string;
    avatar: string;
    date: string;
    rating: number;
    content: string;
};

export const CourseReviews = ({ reviews }: { reviews: Review[] }) => {
    const [newRating, setNewRating] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    const visibleReviews = reviews.slice(0, visibleCount);
    const hasMore = visibleCount < reviews.length;
    const canCollapse = visibleCount > 3;

    return (
        <div className="bg-card rounded-3xl p-6 md:p-8 space-y-10 shadow-sm">
            <h3 className="text-2xl font-black text-foreground">نظرات دانشجویان</h3>

            <div className="bg-secondary/20 p-6 rounded-2xl space-y-5">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">ثبت نظر جدید</h4>
                    <StarRating value={newRating} onChange={setNewRating} size={24} />
                </div>

                <Textarea
                    placeholder="نظرتان در مورد این دوره چیست؟ ارزش خرید داشت؟..."
                    className="min-h-[120px] bg-background border-none resize-none focus-visible:ring-1 text-base rounded-xl"
                />

                <div className="flex justify-end">
                    <Button>ارسال دیدگاه</Button>
                </div>
            </div>

            <div className="space-y-6 pt-4">
                {visibleReviews.map((review) => (
                    <div key={review.id} className="flex gap-5">
                        {review.avatar ? (
                            <img
                                src={review.avatar}
                                alt={review.user}
                                className="w-14 h-14 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                                {review.user.substring(0, 2)}
                            </div>
                        )}


                        <div className="space-y-3 flex-1 bg-secondary/10 p-5 rounded-2xl rounded-tr-none">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-bold text-base block">{review.user}</span>
                                    <span className="text-sm text-muted-foreground mt-0.5 block">{review.date}</span>
                                </div>
                                <StarRating value={review.rating} readOnly size={16} />
                            </div>

                            <p className="text-base text-muted-foreground leading-relaxed">
                                {review.content}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-center gap-3 pt-4">
                    {hasMore && (
                        <Button
                            variant="outline"
                            onClick={() => setVisibleCount((prev) => prev + 3)}
                            className="rounded-xl px-8"
                        >
                            مشاهده نظرات بیشتر
                        </Button>
                    )}

                    {canCollapse && (
                        <Button
                            variant="ghost"
                            onClick={() => setVisibleCount(3)}
                            className="rounded-xl px-8"
                        >
                            نمایش کمتر
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
