import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,opacity,transform] duration-quick ease-smooth active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:opacity-90",
        quiet: "bg-subtle text-foreground hover:bg-accent-soft",
        ghost: "bg-transparent text-foreground hover:bg-subtle",
        danger: "bg-transparent text-danger hover:bg-subtle",
      },
      size: {
        md: "h-11 px-4 text-sm rounded-full",
        sm: "h-10 px-3 text-sm rounded-full",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
