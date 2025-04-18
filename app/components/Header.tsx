import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const LINKS = ['overview', 'pricing', 'blog', 'feedback'];

type HeaderProps = { className?: string };
export function Header({ className }: HeaderProps) {
  return (
    <NavigationMenu className={cn('w-full', className)}>
      <NavigationMenuList className="capitalize text-btn-md flex justify-between items-center flex-wrap ">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavigationMenuItem className="transition-scale duration-200 hover:scale-105">
            <NavigationMenuLink asChild className="text-[1.5rem] font-bold">
              <Link href="/">Startup 3</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </motion.div>
        <motion.div
          className="flex gap-clamp items-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {LINKS.map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <NavigationMenuItem className="transition-scale duration-200 hover:scale-110">
                <NavigationMenuLink asChild>
                  <Link href={`/${link}`}>{link}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button
                  asChild
                  variant="third"
                  size="sm"
                  className="text-btn-md"
                >
                  <Link href="/purchase">Purchase</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        </motion.div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
