import React from "react";
import { cn } from "../../util/util";
import { cva } from "class-variance-authority";
const buttonVariants = cva(
  "inline-flex items-center justify-center no-underline whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none border-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-brandPrimary text-brandPrimaryForeground hover:opacity-90",
        secondary:
          "!bg-brandSecondary text-brandSecondaryForeground !border !border-brandSecondaryForeground border-solid hover:opacity-70",
        outline:
          "!border !border-brandTertiaryForeground !border-solid !text-brandTertiaryForeground bg-brandTertiary hover:!bg-brandTertiaryForeground hover:!text-brandTertiary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        disabled: " bg-brandGray3 text-brandDark5",
      },
      size: {
        default: " !py-3 !px-8 rounded-lg",
        sm: " rounded-md !px-3 !py-1 ",
        md: " !px-7 !py-[13px] ",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      ></button>
    );
  }
);
export { Button, buttonVariants };
