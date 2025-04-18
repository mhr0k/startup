'use client';

import { Pricing } from './components/pricing';
import { motion } from 'motion/react';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <motion.section
        className="text-center space-y-5 max-w-[650px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-heading text-title font-bold"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Simple & flexible pricing built for everyone
        </motion.h1>
        <motion.p
          className="text-text/50 text-paragraph"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </motion.p>
      </motion.section>
      <motion.section
        className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-16 md:gap-4 sm:px-30 md:px-5 lg:px-40 xl:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <Pricing
            name="Start"
            price={19}
            description="All the features you need to keep your personal files safe, accessible, and easy to share."
            features={[
              '2 GB of hosting space',
              '14 days of free backups',
              'Social integrations',
              'Advanced client billing',
            ]}
            cta="Start Free Trial"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Pricing
            name="Enterprise"
            price={49}
            description="All the features you need to keep your personal files safe, accessible, and easy to share."
            features={[
              '2 GB of hosting space',
              '14 days of free backups',
              'Social integrations',
              'Advanced client billing',
            ]}
            cta="Start Free Trial"
            featured
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <Pricing
            name="Enterprise"
            price={99}
            description="All the features you need to keep your personal files safe, accessible, and easy to share."
            features={[
              '2 GB of hosting space',
              '14 days of free backups',
              'Social integrations',
              'Advanced client billing',
            ]}
            cta="Start Free Trial"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
