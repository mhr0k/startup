import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-[10px] flex flex-col items-center justify-center',
  {
    variants: {
      variant: {
        light: 'bg-light text-text border-2 border-light',
        dark: 'bg-dark text-white border-2 border-dark',
        outline: 'border-2 border-grey text-text',
      },
    },
    defaultVariants: {
      variant: 'light',
    },
  }
);

type CardProps = React.ComponentProps<'div'> &
  VariantProps<typeof cardVariants>;

export function Card({ children, className, variant, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}
