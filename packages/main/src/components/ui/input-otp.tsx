"use client";

import * as React from "react";
import { cn } from "@repo/main/utils/cn";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      // dir="rtl" و flex-row-reverse حذف شدند
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } =
    inputOTPContext?.slots?.[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        [
          "relative flex h-11 w-11 items-center justify-center rounded-md ",
          "bg-accent-foreground text-sm shadow-xs outline-none transition-all",
          "dark:bg-input/30",
          "data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50",
          "aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive",
          "data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        ].join(" "),
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
