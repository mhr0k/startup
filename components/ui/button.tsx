'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  cn(
    `cursor-pointer inline-flex items-center justify-center rounded-full aria-busy:bg/80
     disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed 
     transition-scale transition-color duration-200 hover:scale-105 will-change-transform`
  ),
  {
    variants: {
      variant: {
        primary: 'bg-primary !text-white border-2 border-primary',
        secondary: 'bg-secondary !text-white border-2 border-secondary',
        third: 'bg-third !text-white border-2 border-third',
        twitter: 'bg-twitter !text-white border-2 border-twitter',
        outline: 'bg-transparent border-2 border-text/20 !text-heading',
      },
      size: {
        sm: 'text-btn-sm px-5 py-1.5',
        md: 'text-btn-md px-6 py-2',
        lg: 'text-btn-lg px-8 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export function Button({
  variant,
  size,
  asChild = false,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    />
  );
}
