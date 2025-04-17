import { Pricing } from './components/pricing';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <section className="text-center space-y-5 max-w-[650px] mx-auto">
        <h1 className="text-heading text-title font-bold">
          Simple & flexible pricing built for everyone
        </h1>
        <p className="text-text/50 text-paragraph">
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </p>
      </section>
      <section className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-16 md:gap-4 sm:px-30 md:px-5 lg:px-40 xl:px-0">
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
      </section>
    </div>
  );
}
