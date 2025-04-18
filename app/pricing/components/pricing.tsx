import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

type PricingProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};
export function Pricing({
  name,
  price,
  description,
  features,
  cta,
  featured = false,
}: PricingProps) {
  return (
    <motion.article
      className={cn(
        'flex flex-col gap-10 items-center px-2 md:flex-row xl:flex-col'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        variant={featured ? 'dark' : 'outline'}
        className="gap-4 py-15 px-19 flex-1 aspect-[37/31]"
      >
        <motion.h2
          className="text-label uppercase tracking-widest font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {name}
        </motion.h2>
        <motion.div
          className="flex gap-2 items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span
            className={cn(
              'text-heading text-paragraph self-start mt-3',
              featured && 'text-white'
            )}
          >
            $
          </span>
          <motion.p
            className={cn(
              'text-heading text-header font-bold',
              featured && 'text-white text-header'
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {price}
          </motion.p>
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
        </motion.div>
        <motion.p
          className={cn(
            'text-paragraph text-text/50 text-center',
            featured && 'text-white'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </Card>
      <div className="flex-1 flex flex-col gap-6 items-center">
        <motion.ul className="space-y-2.5">
          {features.map((feature, index) => (
            <motion.li
              key={feature}
              className="flex gap-3 items-center text-paragraph text-text/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <Check className="text-primary w-4" />
              {feature}
            </motion.li>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button variant={featured ? 'primary' : 'outline'} className="px-10">
            {cta}
          </Button>
        </motion.div>
      </div>
    </motion.article>
  );
}
