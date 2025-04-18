'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { signin } from '@/actions';
import Link from 'next/link';
import { LoginSchema, type LoginSchemaType } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/app/context';
import toast from 'react-hot-toast';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';

export function Signin() {
  const auth = useAuth();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      consent: false,
    },
    mode: 'onBlur',
  });

  const { isSubmitting } = form.formState;

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const timeout = setTimeout(() => {
      toast.error('Working...', { icon: '⌛' });
    }, 2000);
    const result = await signin(data);
    if (result.user) {
      auth.dispatch({ type: 'LOGIN', payload: { user: result.user } });
      toast.success('Welcome!', { icon: '👋' });
    } else if (result.error) {
      toast.error(result.error, { icon: '❌' });
    }
    clearTimeout(timeout);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="gap-5 py-8 px-8 sm:py-10 sm:px-15">
          <h2 className="text-title text-heading font-bold">Sign Up Now</h2>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="consent"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <div className="gap-2 my-3 flex items-center">
                  <FormControl>
                    <Checkbox
                      onCheckedChange={(checked) => field.onChange(checked)}
                      checked={field.value}
                    />
                  </FormControl>
                  <FormLabel
                    className={cn(
                      field.value ? 'text-text' : 'text-text/50',
                      'hover:text-text/80 transition-colors duration-200 cursor-pointer'
                    )}
                  >
                    I agree to the Terms of Service
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="third"
            size="lg"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="relative w-full"
          >
            <span className={isSubmitting ? 'invisible' : 'block'}>
              Sign In
            </span>
            {isSubmitting && (
              <Loader2 className="animate-spin absolute inset-0 m-auto" />
            )}
          </Button>
          <div className="flex items-center w-full gap-4">
            <span className="border-1 border-grey w-full"></span>
            <span className="text-text/50">or</span>
            <span className="border-1 border-grey w-full"></span>
          </div>
          <Button type="button" variant="twitter" size="lg" className="w-full">
            <span className="text-white">Login via Twitter</span>
          </Button>
          <div>
            <span>Do you have an account? </span>
            <Link href="/" className="text-primary">
              Sign In
            </Link>
          </div>
        </Card>
      </form>
    </Form>
  );
}
