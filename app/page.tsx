'use client';

import { Header } from './components/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Signin } from './components/Signin';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context';
import { useEffect } from 'react';

export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();

  const { loggedIn } = auth.state;

  useEffect(() => {
    if (loggedIn) {
      router.replace('/pricing');
    }
  }, [loggedIn, router]);

  if (loggedIn) return null;

  return (
    <div className="bg-dark text-white overflow-hidden">
      <div className="flex flex-col items-center max-w-5xl container px-3 min-h-[100svh] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Header className="md:mt-18 mt-6" />
        </motion.div>
        <main className="flex flex-col h-full mt-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
            <motion.section
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.h1
                className="text-header font-bold leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Generate Awesome Web Pages
              </motion.h1>
              <motion.p
                className="text-lead lg:pr-24"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                The most important part of the Startup is the samples. The
                samples form a set of 25 usable pages you can use as is or you
                can add new blocks.
              </motion.p>
              <motion.div
                className="w-full flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <Button
                  variant="third"
                  asChild
                  size="lg"
                  className="w-2/3 sm:w-1/2 md:w-auto"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.section>
            <motion.section
              className="w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Signin />
            </motion.section>
          </div>
        </main>
      </div>
    </div>
  );
}
