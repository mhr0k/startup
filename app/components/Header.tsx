import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const LINKS = ['overview', 'prices', 'blog', 'feedback'];

type HeaderProps = { className?: string };
export function Header({ className }: HeaderProps) {
  return (
    <NavigationMenu className={cn('w-full', className)}>
      <NavigationMenuList className="capitalize text-btn-md flex justify-between items-center">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="text-[1.5rem] font-bold">
            <Link href="/">Startup 3</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <div className="flex gap-clamp items-center">
          {LINKS.map((link) => (
            <NavigationMenuItem key={link}>
              <NavigationMenuLink asChild>
                <Link href={`/${link}`}>{link}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Button asChild variant="third" size="sm" className="text-btn-md">
                <Link href="/purchase">Purchase</Link>
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
