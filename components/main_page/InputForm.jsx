'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Checkbox } from '../ui/checkbox';
import useHttp from '@/hooks/useHttp';
import { useTranslations } from 'next-intl';

const InputForm = () => {
  const { sendRequest, error, isLoading } = useHttp();
  const t = useTranslations('group_form');

  const FormSchema = z.object({
    username: z.string().min(2, {
      message: t('error.firstName'),
    }),
    email: z.string().email({
      message: t('error.email'),
    }),
    phoneNumber: z.string().regex(/^\+?\d{9,15}$/, {
      message: t('error.phoneNumber'),
    }),
    message: z.string(),
    agree: z.boolean().refine((value) => value, {
      message: t('error.agree'),
    }),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = (data) => {
    toast({
      title: <p className="dark:text-slate-400">{t('notification.title')}</p>,
      description: (
        <div className="mt-2 w-[340px] rounded-md dark:bg-slate-700">
          <p className="text-black text-base dark:text-slate-400">
            {t('notification.name')}: {data.username}; {t('notification.email')}: {data.email};{' '}
            {t('notification.phoneNumber')}: {data.phoneNumber}; {t('notification.message')}:{' '}
            {data.message}, {data.personal}
          </p>
        </div>
      ),
    });
    sendRequest({ url: 'requests', method: 'post', data: JSON.stringify(data) });

    if (error) return toast({ title: error });

    form.reset({ username: '', email: '', phoneNumber: '', message: '' });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6 bg-white dark:bg-slate-700 dark:text-slate-400 p-5 md:p-12 rounded-sm max-w-[526px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <Input
                placeholder={t('notification.name')}
                {...field}
                className="px-4 py-3 text-base dark:border-transparent dark:placeholder-slate-500"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Input
                {...field}
                type="email"
                id="email"
                placeholder={t('enter_email')}
                className="text-base dark:border-transparent dark:placeholder-slate-500"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Input
                {...field}
                type="tel"
                id="phoneNumber"
                placeholder={t('enter_phoneNumber')}
                className="text-base dark:border-transparent dark:placeholder-slate-500"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <textarea
                {...field}
                id="message"
                placeholder={t('enter_message')}
                className="border rounded p-2 dark:border-transparent dark:focus:border-black dark:active:border-black dark:outline-none dark:bg-slate-700 dark:placeholder-slate-500"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <div className="flex space-x-2 items-center">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                <FormLabel className="dark:text-slate-500">{t('agree_personal')}</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full text-lg dark:bg-slate-800 dark:text-slate-500">
          {isLoading ? t('sending') : t('leave_request')}
        </Button>
      </form>
    </Form>
  );
};

export default InputForm;
