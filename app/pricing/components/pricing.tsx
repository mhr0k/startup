import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

type PricingProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  className?: string;
};
export function Pricing({
  name,
  price,
  description,
  features,
  cta,
  featured = false,
  className,
}: PricingProps) {
  return (
    <article
      className={cn(
        'flex flex-col gap-10 items-center px-2 md:flex-row xl:flex-col'
      )}
    >
      <Card
        variant={featured ? 'dark' : 'outline'}
        className="gap-4 py-15 px-19 flex-1 aspect-[37/31]"
      >
        <h2 className="text-label uppercase tracking-widest font-bold">
          {name}
        </h2>
        <div className="flex gap-2 items-center ">
          <span
            className={cn(
              'text-heading text-paragraph self-start mt-3',
              featured && 'text-white'
            )}
          >
            $
          </span>
          <p
            className={cn(
              'text-heading text-header font-bold',
              featured && 'text-white text-header'
            )}
          >
            {price}
          </p>
          <p
            className={cn(
              'text-paragraph text-heading pl-4',
              featured && 'text-white'
            )}
          >
            per month
            <br />
            per user
          </p>
        </div>
        <p
          className={cn(
            'text-paragraph text-text/50 text-center',
            featured && 'text-white'
          )}
        >
          {description}
        </p>
      </Card>
      <div className="flex-1 flex flex-col gap-6 items-center">
        <ul className="space-y-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 items-center text-paragraph text-text/50"
            >
              <Check className="text-primary w-4" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant={featured ? 'primary' : 'outline'} className="px-10">
          {cta}
        </Button>
      </div>
    </article>
  );
}
