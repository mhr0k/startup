import { Header } from './components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Signin } from './components/Signin';

export default function Home() {
  return (
    <div className="bg-dark text-white overflow-hidden">
      <div className="flex flex-col items-center max-w-5xl container px-3 min-h-[100svh] mx-auto">
        <Header className="md:mt-18 mt-6" />
        <main className="flex flex-col h-full mt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
            <section className="flex flex-col gap-12 px-5">
              <h1 className="text-header font-bold leading-tight">
                Generate Awesome Web Pages
              </h1>
              <p className="text-lead lg:pr-22">
                The most important part of the Startup is the samples. The
                samples form a set of 25 usable pages you can use as is or you
                can add new blocks.
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <Button
                  variant="third"
                  asChild
                  size="lg"
                  className="w-1/2 md:w-auto"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </section>
            <section className="w-full">
              <Signin />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
