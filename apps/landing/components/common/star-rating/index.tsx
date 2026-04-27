"use client";

import * as React from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  value: number; // مثال: 3.5
  onChange?: (value: number) => void;
  readOnly?: boolean;
  disabled?: boolean;
  max?: number;
  size?: number;
  step?: 0.5 | 1;
  className?: string;
  name?: string;
  "aria-label"?: string;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const roundToStep = (v: number, step: number) => Math.round(v / step) * step;

export function StarRating({
  value,
  onChange,
  readOnly = false,
  disabled = false,
  max = 5,
  size = 20,
  step = 0.5,
  className = "",
  name,
  "aria-label": ariaLabel = "امتیاز",
}: StarRatingProps) {
  const [hover, setHover] = React.useState<number | null>(null);

  const isInteractive = !readOnly && !disabled && typeof onChange === "function";
  const displayValue = hover ?? value;

  const setValue = (v: number) => {
    if (!isInteractive) return;
    const next = clamp(roundToStep(v, step), 0, max);
    onChange?.(next);
  };

  const getHoverValueFromEvent = (starIndex: number, e: React.MouseEvent<HTMLButtonElement>) => {
    if (step === 1) return starIndex;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = x <= rect.width / 2 ? 0.5 : 1;
    return starIndex - 1 + half;
  };

  return (
    <div
      className={["inline-flex items-center gap-1", disabled ? "opacity-60" : "", className].join(" ")}
      role="slider"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={clamp(value, 0, max)}
      onMouseLeave={() => {
        if (isInteractive) setHover(null);
      }}
    >
      {name ? <input type="hidden" name={name} value={value} /> : null}

      {Array.from({ length: max }).map((_, i) => {
        const starIndex = i + 1;
        const fillAmount = clamp(displayValue - i, 0, 1);
        const fillPercent = `${fillAmount * 100}%`;

        return (
          <button
            key={starIndex}
            type="button"
            className={[
              "relative grid place-items-center rounded-md transition-transform",
              isInteractive ? "cursor-pointer hover:scale-110" : "cursor-default",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
            ].join(" ")}
            style={{ width: size, height: size }}
            disabled={!isInteractive}
            aria-label={`${starIndex} از ${max}`}
            onMouseMove={(e) => {
              if (!isInteractive) return;
              const v = getHoverValueFromEvent(starIndex, e);
              setHover(clamp(roundToStep(v, step), 0, max));
            }}
            onClick={(e) => {
              const v = step === 1 ? starIndex : getHoverValueFromEvent(starIndex, e);
              setValue(v);
            }}
            onKeyDown={(e) => {
              if (!isInteractive) return;

              if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                e.preventDefault();
                setValue(value + step);
              }
              if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                e.preventDefault();
                setValue(value - step);
              }
              if (e.key === "Home") {
                e.preventDefault();
                setValue(0);
              }
              if (e.key === "End") {
                e.preventDefault();
                setValue(max);
              }
            }}
          >
            <Star
              style={{ width: size, height: size }}
              className="absolute inset-0 fill-muted text-muted-foreground/30 transition-colors duration-150"
            />

            <span className="absolute inset-0 overflow-hidden" style={{ width: fillPercent }}>
              <Star
                style={{ width: size, height: size }}
                className="fill-amber-400 text-amber-400 transition-colors duration-150"
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}