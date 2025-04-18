import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  cn(
    'px-6 w-full py-2.5 border-3 text-text rounded-full aria-invalid:border-danger transition-transform will-change-transform hover:scale-105 focus:scale-105 duration-200'
  ),
  {
    variants: {
      variant: {
        default: 'border-grey',
        error: 'border-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants>;
export function Input({ className, variant, ...props }: InputProps) {
  return (
    <input {...props} className={cn(inputVariants({ variant }), className)} />
  );
}
