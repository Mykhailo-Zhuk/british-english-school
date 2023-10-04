'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useTranslations } from 'next-intl';

const SubscribeInput = () => {
  const t = useTranslations('subscribe');

  const FormSchema = z.object({
    email: z.string().email({
      message: t('error.email'),
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    toast({
      title: t('notification'),
      description: (
        <div className="mt-2 w-[340px] rounded-md">
          <p className="text-black text-base">
            {t('email')}: {data.email}.
          </p>
        </div>
      ),
    });
    form.reset({ email: '' });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col md:flex-row space-y-4 md:space-x-4 items-center">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full sm:w-2/3">
              <Input
                {...field}
                type="email"
                id="email"
                placeholder={t('placeholder')}
                className="h-16 border-t-0 border-x-0 border-b-2 border-b-slate-500 hover:border-transparent focus-visible:outline-none focus:ring-transparent focus-visible:ring-transparent rounded-none text-white dark:text-slate-400 placeholder:text-slate-400"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="text-sm text-white bg-gradient-to-r from-[#ee7b40] to-[#cf5657] dark:from-slate-800 dark:to-slate-700 dark:text-slate-400 sm:h-16 w-full sm:w-auto">
          {t('subscribe')}
        </Button>
      </form>
    </Form>
  );
};

export default SubscribeInput;
