import React from "react"
import { Button } from "@repo/main/components/ui/button"
import { cn } from "@repo/main/utils/cn"
import Link from "next/link"
import HeadText from "../typography/head"

interface SectionHeaderProps {
  title: string
  buttonText?: string
  href?: string
  className?: string
}

export default function SectionHeader({
  title,
  buttonText,
  href,
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex  gap-6 items-center justify-between",
        className
      )}
    >
      <div className="flex items-center gap-4">

        {/* schematic shape */}
        <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10">
          <div className="absolute w-5 h-5 bg-primary rounded-sm rotate-12 opacity-80" />
          <div className="absolute w-3 h-3 bg-primary/70 rounded-sm -rotate-12 translate-x-1 translate-y-1" />
        </div>

        <HeadText as="h2">{title}</HeadText>
      </div>

      {buttonText && href && (
        <Button
          asChild
          variant="outline"
          className="w-fit sm:w-auto"
        >
          <Link href={href}>{buttonText}</Link>
        </Button>
      )}
    </div>
  )
}
