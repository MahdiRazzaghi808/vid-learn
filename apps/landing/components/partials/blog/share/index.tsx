"use client";

import { Button } from "@repo/main/components/ui/button";
import { toast } from "sonner";
import { Link2, Linkedin, Send, Twitter } from "lucide-react";

export default function ArticleShare() {

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک مقاله کپی شد");
  };

  const share = (url: string) => {
    window.open(url, "_blank");
  };

  const link = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="flex items-center justify-between mt-14 bg-muted/50 rounded-xl px-6 py-4">

      <span className="font-medium">
        اشتراک گذاری
      </span>

      <div className="flex gap-2">

        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            share(`https://twitter.com/intent/tweet?url=${link}`)
          }
        >
          <Twitter className="w-4 h-4"/>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            share(`https://t.me/share/url?url=${link}`)
          }
        >
          <Send className="w-4 h-4"/>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            share(`https://www.linkedin.com/sharing/share-offsite/?url=${link}`)
          }
        >
          <Linkedin className="w-4 h-4"/>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={copyLink}
        >
          <Link2 className="w-4 h-4"/>
        </Button>

      </div>
    </div>
  );
}
